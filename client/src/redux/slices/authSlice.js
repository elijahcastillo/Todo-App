import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  accessToken: "",
  showNav: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setToken: (state, action) => {
      state.accessToken = action.payload;
    },

    setNav: (state, action) => {
      state.showNav = action.payload;
    },
  },
});

export default authSlice.reducer;
export const { setUsername, setToken, setNav } = authSlice.actions;
