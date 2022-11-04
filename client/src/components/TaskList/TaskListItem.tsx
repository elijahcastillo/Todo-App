import React from "react";
import { TaskList } from "./GetTaskLists";

const TaskListItem = ({ id, name }: TaskList) => {
  return <div>{name}</div>;
};

export default TaskListItem;
