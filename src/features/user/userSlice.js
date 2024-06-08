import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isSidebarOpen: false,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    logoutUser: (state) => {
      state.user = {};
      state.isSidebarOpen = false;
      localStorage.removeItem("refreshJWT");
      sessionStorage.removeItem("accessJWT");
    },
  },
});

const { reducer, actions } = userSlice;

export const { setUser, toggleSidebar, logoutUser } = actions;

export default reducer;
