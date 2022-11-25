import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { StyledCreate } from "../../css/TaskHome.styled";
import { useUpdateTaskItemMutation } from "../../redux/api";

const EditItem = () => {
  const { taskId, oldText, oldDate } = useParams();
  const [newName, setNewName] = useState(oldText);
  const [newDate, setNewDate] = useState(oldDate);

  const [updateTask] = useUpdateTaskItemMutation();
  const navigate = useNavigate();

  const editTask = () => {
    updateTask({ taskId, newName, newDate });
    navigate(-1);
  };

  return (
    <div className="offsetContainer">
      <StyledCreate>
        <h1 className="title">Update Task</h1>
        <div className="newTaskContainer">
          <div className="newTaskInputWrapper">
            <div className="newTaskInput">
              <h3 className="inputTitle">New Title</h3>
              <input
                className="inp"
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
            </div>
            <div className="newTaskInput">
              <h3 className="inputTitle">New Date</h3>
              <input
                className="inp"
                type="date"
                value={newDate}
                onChange={(e) => setNewDate(e.target.value)}
              />
            </div>
          </div>
          <div className="newTaskFooter">
            <button onClick={editTask}>Update Task</button>
          </div>
        </div>
      </StyledCreate>
    </div>
  );
};

export default EditItem;
