import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { StyledInfoBar } from "../../css/InfoBar.styled";
import FilterTaskItems from "./FilterTaskItems";
import TaskStatus from "./TaskStatus";
import { useDeleteTaskListMutation } from "../../redux/api";

const InfoBar = () => {
  const { listId, listName } = useParams();
  const navigate = useNavigate();
  const [deleteList] = useDeleteTaskListMutation();

  const delList = () => {
    deleteList({ listId });
    navigate("/home/all");
  };

  //Todo: Filter - dispatch to store, use Enum and import in both components, based on the value in store, change displayed data

  return (
    <StyledInfoBar>
      {/*<div className="listTitle">{listName}</div>*/}
      <TaskStatus />
      <FilterTaskItems />
    </StyledInfoBar>
  );
};

export default InfoBar;
