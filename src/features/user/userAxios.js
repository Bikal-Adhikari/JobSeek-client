import { apiProcessor } from "../../helpers/apiProcessor";

const serverURL = import.meta.env.VITE_APP_ROOT_SERVER;
const userEP = serverURL + "/api/v1/users";

export const loginUser = async (obj) => {
  const axiosObj = {
    method: "post",
    url: userEP + "/login",
    data: obj,
  };
  return apiProcessor(axiosObj);
};
export const postNewUser = async (obj) => {
  console.log(obj);
  const axiosObj = {
    method: "post",
    url: userEP,
    data: obj,
  };
  return apiProcessor(axiosObj);
};
export const fetchUserInfo = async () => {
  const axiosObj = {
    method: "get",
    url: userEP,
    isPrivate: true,
  };
  return apiProcessor(axiosObj);
};
