import React, { useEffect, useState } from "react";
import TaskListItem from "./TaskListItem";
import { useGetAllTaskListsQuery } from "../../redux/api";
import { useNavigate, useParams } from "react-router-dom";
import { StyledListItem } from "../../css/TaskList.styled";

export interface TaskList {
  id: number;
  name: string;
}

const GetTaskLists = () => {
  const { listId }: any = useParams();
  const navigate = useNavigate();

  const { data, error, isLoading } = useGetAllTaskListsQuery(undefined);
  console.log(data, "FF");

  if (isLoading) return <div>...Loading</div>;
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
