import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  accessToken: "",
  TaskList: [],
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

    setListId: (state, action) => {
      state.currentListId = action.payload;
    },
    setTaskList: (state, action) => {
      state.TaskList = action.payload;
    },
  },
});

export default authSlice.reducer;
export const { setUsername, setToken, setListId, setTaskList } =
  authSlice.actions;
