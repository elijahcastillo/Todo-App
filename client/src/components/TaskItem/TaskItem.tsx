import React from "react";
import { StyledTaskItem } from "../../css/TaskHome.styled";
import { ITaskItem } from "../../types/allTypes";
import { useDeleteTaskItemMutation } from "../../redux/api";
import { useUpdateCompleationTaskItemMutation } from "../../redux/api";

import { ReactComponent as UnDo } from "../../assets/times-circle.svg";
import { ReactComponent as Trash } from "../../assets/trash-alt.svg";
import { ReactComponent as Check } from "../../assets/check-circle.svg";

const TaskItem = ({ id, name, date, compleated }: ITaskItem) => {
  const [deleteTask] = useDeleteTaskItemMutation();
  const [updateCompleation] = useUpdateCompleationTaskItemMutation();
  return (
    <StyledTaskItem>
      <div className="taskIcons">
        <Check
          className={compleated ? "icon checkmarkActive " : "icon checkmark"}
          onClick={() => updateCompleation({ id })}
        />
        <UnDo
          className={compleated ? "icon UnDo" : "icon UnDoActive"}
          onClick={() => updateCompleation({ id })}
        />
        <Trash className="icon trash" onClick={() => deleteTask({ id })} />
      </div>

      <div className="contentContainer">
        <div className="content">{name}</div>
        <div className="contentDate">{date}</div>
      </div>
    </StyledTaskItem>
  );
};

export default TaskItem;
