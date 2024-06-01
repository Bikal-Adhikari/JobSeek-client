import { useState } from "react";
import Logo from "../../components/Logo";
import Wrapper from "./signup";
import CustomInput from "../../components/CustomInput";
import { toast } from "react-toastify";

const SignUp = () => {
  const [form, setForm] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { confirmPassword, ...rest } = form;

    if (confirmPassword !== rest.password) {
      return toast.error("password do not match");
    }
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
      label: "Phone",
      name: "phone",
      type: "number",
      required: false,
      placeholder: "0451266661",
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      required: true,
      placeholder: "email@email.com",
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      required: true,
      placeholder: "**********",
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      type: "password",
      required: true,
      placeholder: "**********",
    },
  ];
  return (
    <Wrapper>
      <form className="form" onSubmit={handleOnSubmit}>
        <Logo />
        <h3>Sign-Up</h3>
        {inputs.map((input, index) => (
          <CustomInput key={index} {...input} onChange={handleOnChange} />
        ))}
        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          Already have an account ?{"  "}
          <a href="/sign-in" className="member-btn">
            Login Now
          </a>
        </p>
      </form>
    </Wrapper>
  );
};

export default SignUp;
