import { toast } from "react-toastify";
import { editUserInfo, fetchUserInfo, loginUser } from "./userAxios";
import { setUser } from "./userSlice";
import { renewAccessJWT } from "../../helpers/axiosHelper";

export const getUserObj = () => async (dispatch) => {
  const { status, user } = await fetchUserInfo();
  console.log(status, user);

  //update Store
  dispatch(setUser(user));
};

export const signInUser =
  ({ email, password }) =>
  async (dispatch) => {
    console.log({ email, password });
    const pending = loginUser({ email, password });
    toast.promise(pending, {
      pending: "Please wait...",
    });
    const { status, message, tokens } = await pending;
    toast[status](message);
    //store token in the sessions
    sessionStorage.setItem("accessJWT", tokens.accessJWT);
    localStorage.setItem("refreshJWT", tokens.refreshJWT);

    if (status === "success") {
      dispatch(getUserObj());
    }
  };

//auto login user

export const autoLogin = () => async (dispatch) => {
  const accessJWT = sessionStorage.getItem("accessJWT");
  const refreshJWT = localStorage.getItem("refreshJWT");

  // when access JWT exists
  if (accessJWT) {
    dispatch(getUserObj());
    return;
  }
  // when accessJWT do not exist but refreshJWT exist
  if (refreshJWT) {
    const token = await renewAccessJWT();
    token && dispatch(getUserObj());
  }
};

// edit user profile
export const editUserAction =
  (fName, email, lName, location) => async (dispatch) => {
    const pending = await editUserInfo({ fName, email, lName, location });
    toast.promise(pending, {
      pending: "Please wait...",
    });
    const { status, message } = pending;
    toast[status](message);
    if (status === "success") {
      dispatch(getUserObj());
    }
  };
