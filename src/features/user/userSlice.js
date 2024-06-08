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
  },
});

const { reducer, actions } = userSlice;

export const { setUser, toggleSidebar } = actions;

export default reducer;
