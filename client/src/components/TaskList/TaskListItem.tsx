import React from "react";
import { TaskList } from "./GetTaskLists";
import { Link } from "react-router-dom";

const TaskListItem = ({ id, name }: TaskList) => {
  return (
    <Link to={`/home/${id}`}>
      <div>{name}</div>;
    </Link>
  );
};

export default TaskListItem;
