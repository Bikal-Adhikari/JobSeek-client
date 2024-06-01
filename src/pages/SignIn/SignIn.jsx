import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Wrapper from "./signIn";
import Logo from "../../components/Logo";
import CustomInput from "../../components/CustomInput";

const SignIn = () => {
  const emailRef = useRef("");
  const passRef = useRef("");
  const navigate = useNavigate();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passRef.current.value;
    console.log(email, password);
    if (!email || !password) {
      return toast.error("Both field must be filled");
    }
  };

  const inputs = [
    {
      label: "Email",
      name: "email",
      type: "email",
      required: true,
      placeholder: "email@email.com",
      inputRef: emailRef,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      required: true,
      placeholder: "**********",
      inputRef: passRef,
    },
  ];
  return (
    <Wrapper>
      <form className="form" onSubmit={handleOnSubmit}>
        <Logo />
        <h3>Sign-Up</h3>
        {inputs.map((input, index) => (
          <CustomInput key={index} {...input} />
        ))}
        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          Don't have an account ?{"  "}
          <a href="/sign-up" className="member-btn">
            SignUp Now
          </a>
        </p>
      </form>
    </Wrapper>
  );
};

export default SignIn;
