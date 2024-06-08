import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Wrapper from "./DashboardFormPage";

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
    const { name, email, lastName, location } = userData;

    if (!name || !email || !lastName || !location) {
      toast.error("Please Fill Out All Fields");
      return;
    }
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  return <Wrapper></Wrapper>;
};

export default Profile;
