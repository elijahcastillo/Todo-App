import { configureStore } from "@reduxjs/toolkit";
import { todoApi } from "./api";
import authSlice from "./slices/authSlice";
import taskItemSlice from "./slices/taskItemSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    taskItem: taskItemSlice,
    [todoApi.reducerPath]: todoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoApi.middleware),
});
