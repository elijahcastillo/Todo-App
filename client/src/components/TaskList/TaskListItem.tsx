import React from "react";
import { TaskList } from "./GetTaskLists";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDeleteTaskListMutation } from "../../redux/api";
import { useDispatch } from "react-redux";
import { setNav } from "../../redux/slices/authSlice";

const TaskListItem = ({ id, name }: TaskList) => {
  const dispatch = useDispatch();
  const { listName } = useParams();
  return (
    <Link
      to={`/home/${id}/${name}`}
      className={
        listName === name ? "taskListLink ListLinkActive" : "taskListLink"
      }
      onClick={() => dispatch(setNav(false))}
    >
      <div>{name}</div>
    </Link>
  );
};

export default TaskListItem;
