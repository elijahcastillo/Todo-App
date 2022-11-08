import { createSlice } from "@reduxjs/toolkit";
import { ItemFilter } from "../../types/allTypes";

const initialState = {
  compleated: 0,
  total: 0,
  filterItem: ItemFilter.ALL,
};

export const taskItemSlice = createSlice({
  name: "TaskItem",
  initialState,
  reducers: {
    setCompleated: (state, action) => {
      state.compleated = action.payload;
    },
    setTotal: (state, action) => {
      state.total = action.payload;
    },
    setFilter: (state, action) => {
      state.filterItem = action.payload;
    },
  },
});

export default taskItemSlice.reducer;
export const { setCompleated, setTotal, setFilter } = taskItemSlice.actions;
