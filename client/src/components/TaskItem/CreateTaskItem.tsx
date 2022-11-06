import React, { useState } from "react";
import { StyledCreate } from "../../css/TaskHome.styled";
import { useParams } from "react-router-dom";
import { useAddTaskItemMutation } from "../../redux/api";

const CreateTaskItem = () => {
  const [taskName, setTaskName] = useState<string>("");
  const [taskDate, setTaskDate] = useState<string>("");
  const { listId } = useParams();

  const [addNewItem, result] = useAddTaskItemMutation();

  const addItem = () => {
    addNewItem({
      name: taskName,
      date: taskDate,
      listId: listId,
    });

    setTaskDate("");
    setTaskName("");
  };

  return (
    <StyledCreate>
      <h1 className="title">Create New Task</h1>
      <div className="newTaskContainer">
        <div className="newTaskInputWrapper">
          <div className="newTaskInput">
            <h3 className="inputTitle">Title</h3>
            <input
              className="inp"
              type="text"
              placeholder="ex: Take out the Trash"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />
          </div>
          <div className="newTaskInput">
            <h3 className="inputTitle">Due Date</h3>
            <input
              className="inp"
              type="date"
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
            />
          </div>
        </div>
        <div className="newTaskFooter">
          <button onClick={addItem}>Create Task</button>
        </div>
      </div>
    </StyledCreate>
  );
};

export default CreateTaskItem;
