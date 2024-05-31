import { useState } from "react";
import Logo from "../../components/Logo";
import Wrapper from "./signup";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const SignUp = () => {
  const [values, setValues] = useState(initialState);

  const handleOnChange = (e) => {
    console.log(e.target);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleOnSubmit}>
        <Logo />
        <h3>Sign-Up</h3>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            value={values.name}
            name="name"
            onChange={handleOnChange}
            className="form-input"
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </Wrapper>
  );
};

export default SignUp;
