import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Wrapper from "./signIn";
import Logo from "../../components/Logo";
import CustomInput from "../../components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../features/user/userAxios";
import { getUserObj } from "../../features/user/userAction";

const SignIn = () => {
  const dispatch = useDispatch();
  const emailRef = useRef("");
  const passRef = useRef("");
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.userInfo);
  useEffect(() => {
    user?._id && navigate("/");
  }, [user?._id, navigate]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passRef.current.value;
    console.log(email, password);
    if (!email || !password) {
      return toast.error("Both field must be filled");
    }
    const { status, message, tokens } = await loginUser({ email, password });
    toast[status](message);
    //store token in the sessions
    sessionStorage.setItem("accessJWT", tokens.accessJWT);
    localStorage.setItem("refreshJWT", tokens.refreshJWT);

    if (status === "success") {
      dispatch(getUserObj());
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
