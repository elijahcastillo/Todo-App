import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { store } from "../../index";

const initialState = {
  TaskList: [],
};

export const taskListSlice = createSlice({
  name: "TaskList",
  initialState,
  reducers: {
    setTaskList: (state, action) => {
      state.TaskList = action.payload;
    },
  },
});

export default taskListSlice.reducer;
export const { setTaskList } = taskListSlice.actions;
