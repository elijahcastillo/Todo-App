import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { StyledInfoBar } from "../../css/InfoBar.styled";
import FilterTaskItems from "./FilterTaskItems";
import TaskStatus from "./TaskStatus";
import { useDeleteTaskListMutation } from "../../redux/api";

const InfoBar = () => {
  return (
    <StyledInfoBar>
      <TaskStatus />
      <FilterTaskItems />
    </StyledInfoBar>
  );
};

export default InfoBar;
