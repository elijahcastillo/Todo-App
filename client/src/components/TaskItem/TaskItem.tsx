import React from "react";
import { StyledTaskItem } from "../../css/TaskHome.styled";
import { ITaskItem } from "../../types/allTypes";
import { useDeleteTaskItemMutation } from "../../redux/api";
import { useUpdateCompleationTaskItemMutation } from "../../redux/api";

import { ReactComponent as UnDo } from "../../assets/times-circle.svg";
import { ReactComponent as Trash } from "../../assets/trash-alt.svg";
import { ReactComponent as Check } from "../../assets/check-circle.svg";
import { ReactComponent as Edit } from "../../assets/edit-alt.svg";
import { useNavigate } from "react-router-dom";

const TaskItem = ({ id, name, date, compleated }: ITaskItem) => {
  const [deleteTask] = useDeleteTaskItemMutation();
  const [updateCompleation] = useUpdateCompleationTaskItemMutation();
  const navigate = useNavigate();

  const handleUpdate = (type: boolean) => {
    //Check if trying to compleate an already compleated task
    if (type === Boolean(compleated)) {
      return;
    }
    updateCompleation({ id });
  };

  return (
    <StyledTaskItem>
      <div className="taskIcons">
        <Check
          className={compleated ? "icon checkmarkActive " : "icon checkmark"}
          onClick={() => handleUpdate(true)}
        />
        <UnDo
          className={compleated ? "icon UnDo" : "icon UnDoActive"}
          onClick={() => handleUpdate(false)}
        />
        <Edit
          className="icon edit"
          onClick={() => navigate(`/home/update-item/${id}/${name}/${date}`)}
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
