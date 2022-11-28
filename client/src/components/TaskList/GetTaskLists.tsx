import React, { useEffect, useState } from "react";
import TaskListItem from "./TaskListItem";
import { useGetAllTaskListsQuery } from "../../redux/api";
import { useNavigate, useParams } from "react-router-dom";
import { StyledListItem } from "../../css/TaskList.styled";
import LoadingSpinner from "../LoadingSpinner";

export interface TaskList {
  id: number;
  name: string;
}

const GetTaskLists = () => {
  const { data, error, isLoading } = useGetAllTaskListsQuery(undefined);

  if (isLoading) return <LoadingSpinner />;
  if (error) return <div>Error</div>;

  return (
    <StyledListItem>
      {data.taskList.map((item: any, i: number) => {
        return <TaskListItem id={item.id} name={item.name} key={i} />;
      })}
    </StyledListItem>
  );
};

export default GetTaskLists;
