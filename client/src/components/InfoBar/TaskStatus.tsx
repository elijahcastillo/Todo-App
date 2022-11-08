import React from "react";
import { useSelector } from "react-redux";
import { StyledStatus } from "../../css/InfoBar.styled";

//Todo: Display Number of compleated and not compleated Tasks. In Get task, disptach numbers to store, grab here

const TaskStatus = () => {
  const { compleated, total } = useSelector((state: any) => state.taskItem);

  return (
    <StyledStatus>
      <div className="statusItem">
        <h1 className="counter">{compleated}</h1> <p className="desc">Done</p>
      </div>
      <div className="statusItem">
        <h1 className="counter">{total - compleated}</h1>
        <p className="desc">Todo</p>
      </div>
    </StyledStatus>
  );
};

export default TaskStatus;
