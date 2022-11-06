import React, { useEffect, useState } from "react";
import { StyledTaskHome } from "../../css/TaskHome.styled";
import CreateTaskItem from "./CreateTaskItem";
import DisplayTaskItems from "./DisplayTaskItems";

const TaskHome = () => {
  return (
    <StyledTaskHome>
      <div className="offsetContainer">
        <CreateTaskItem />
        <DisplayTaskItems />
      </div>
    </StyledTaskHome>
  );
};

export default TaskHome;
