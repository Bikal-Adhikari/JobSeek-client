import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Wrapper from "./signIn";
import Logo from "../../components/Logo";
import CustomInput from "../../components/CustomInput";
import { useDispatch, useSelector } from "react-redux";

import { signInUser } from "../../features/user/userAction";

const SignIn = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const emailRef = useRef("");
  const passRef = useRef("");
  const navigate = useNavigate();

  const sendTo = location?.state?.from?.location?.pathname || "/";

  const { user } = useSelector((state) => state.userInfo);
  useEffect(() => {
    user?._id && navigate(sendTo);
  }, [user?._id, navigate, sendTo]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passRef.current.value;
    console.log(email, password);
    if (!email || !password) {
      return toast.error("Both field must be filled");
    }

    dispatch(signInUser({ email, password }));
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
        <h3>Sign-In</h3>
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
