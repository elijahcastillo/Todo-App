import React, { useEffect, useState } from "react";
import TaskListItem from "./TaskListItem";
import { useGetAllTaskListsQuery } from "../../redux/api";
import { StyledListItem } from "../../css/TaskList.styled";
import LoadingSpinner from "../LoadingSpinner";
import { toast, ToastContainer } from "react-toastify";
import { totalmem } from "os";

export interface TaskList {
  id: number;
  name: string;
}

const GetTaskLists = () => {
  const { data, error, isLoading } = useGetAllTaskListsQuery(undefined);

  if (isLoading) return <LoadingSpinner />;
  if (error) {
    console.log("TASK LIST ERROR: ", error);
    toast.error("Error fetching Task Lists");
    return <div>Error...</div>;
  }

  return (
    <StyledListItem>
      {data.taskList.map((item: any, i: number) => {
        return <TaskListItem id={item.id} name={item.name} key={i} />;
      })}
    </StyledListItem>
  );
};

export default GetTaskLists;
