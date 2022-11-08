import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.accessToken;
      if (token) {
        headers.set("authorization", `bearer ${token}`);
      }
      return headers;
    },
    credentials: "include",
  }),
  tagTypes: ["TaskList", "TaskItem"],
  endpoints: (builder) => ({
    getAllTaskLists: builder.query({
      query: () => "task-list",
      providesTags: ["TaskList"],
    }),
    addTaskList: builder.mutation({
      query: (payload) => ({
        url: "task-list/create",
        method: "POST",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["TaskList"],
    }),
    deleteTaskList: builder.mutation({
      query: (payload) => ({
        url: "task-list/delete",
        method: "POST",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["TaskList"],
    }),
    getTaskItemById: builder.query({
      query: (payload) => ({
        url: "task-item/by-id",
        method: "POST",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      providesTags: ["TaskItem"],
    }),
    addTaskItem: builder.mutation({
      query: (payload) => ({
        url: "task-item/create",
        method: "POST",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["TaskItem"],
    }),
    deleteTaskItem: builder.mutation({
      query: (payload) => ({
        url: "task-item/delete",
        method: "POST",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["TaskItem"],
    }),
    updateCompleationTaskItem: builder.mutation({
      query: (payload) => ({
        url: "task-item/update-compleation",
        method: "POST",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["TaskItem"],
    }),
  }),
});

export const {
  useGetAllTaskListsQuery,
  useAddTaskListMutation,
  useGetTaskItemByIdQuery,
  useAddTaskItemMutation,
  useDeleteTaskListMutation,
  useDeleteTaskItemMutation,
  useUpdateCompleationTaskItemMutation,
} = todoApi;
