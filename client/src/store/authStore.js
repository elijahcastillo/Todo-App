import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  accessToken: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUsername: (state, payload) => {
      state.username = payload;
    },
    setToken: (state, payload) => {
      console.log(payload, "TOKKKK");
      state.accessToken = payload.payload;
    },
  },
});

export default authSlice.reducer;
export const { setUsername, setToken } = authSlice.actions;
