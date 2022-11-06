import React from "react";
import { TaskList } from "./GetTaskLists";
import { Link } from "react-router-dom";
import { useDeleteTaskListMutation } from "../../redux/api";

const TaskListItem = ({ id, name }: TaskList) => {
  const [deleteList] = useDeleteTaskListMutation();

  return (
    <Link to={`/home/${id}`} className="taskListLink">
      <div>{name}</div>
      <div className="DelTask" onClick={() => deleteList({ listId: id })}>
        X
      </div>
    </Link>
  );
};

export default TaskListItem;
