import { createSlice } from "@reduxjs/toolkit";
import { ItemDateSort, ItemFilter } from "../../types/allTypes";

const initialState = {
  compleated: 0,
  total: 0,
  filterItem: ItemFilter.ALL,
  sortItem: ItemDateSort.ASCENDING,
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
    setSort: (state, action) => {
      state.sortItem = action.payload;
    },
  },
});

export default taskItemSlice.reducer;
export const { setCompleated, setTotal, setFilter, setSort } =
  taskItemSlice.actions;
