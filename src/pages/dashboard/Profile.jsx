import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Wrapper from "./DashboardFormPage";
import CustomInput from "../../components/CustomInput";
import { editUserAction } from "../../features/user/userAction";

const Profile = () => {
  const { user } = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    fName: user?.fName || "",
    lName: user?.lName || "",
    email: user?.email || "",
    location: user?.location || "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const { fName, email, lName, location } = userData;
    console.log(userData);
    if (!fName || !email || !lName || !location) {
      toast.error("Please Fill Out All Fields");
      return;
    }
    if (
      window.confirm("Are you sure you want to make changes to your profile")
    ) {
      dispatch(editUserAction(fName, email, lName, location));
    }
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };
  const inputs = [
    {
      label: "First Name",
      name: "fName",
      type: "text",
      required: true,
      placeholder: "Write your first Name",
    },
    {
      label: "Last Name",
      name: "lName",
      type: "text",
      required: true,
      placeholder: "Write your Last Name",
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      required: true,
      placeholder: "email@email.com",
    },
    {
      label: "Location",
      name: "location",
      type: "text",
      required: true,
      placeholder: "Write your City name",
    },
  ];

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>profile</h3>

        <div className="form-center">
          {inputs.map((input, i) => (
            <CustomInput
              key={i}
              {...input}
              onChange={handleChange}
              value={userData[input.name]}
            />
          ))}

          <button className="btn btn-block" type="submit">
            Update Profile
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default Profile;
