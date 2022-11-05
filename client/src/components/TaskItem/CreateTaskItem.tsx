import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { StyledCreate } from "../../css/TaskHome.styled";
import { useParams } from "react-router-dom";
import { ITaskItem } from "./TaskHome";

interface CreateItemProps {
  setTaskItems: React.Dispatch<React.SetStateAction<ITaskItem[]>>;
}

const CreateTaskItem = ({ setTaskItems }: CreateItemProps) => {
  const [taskName, setTaskName] = useState<string>("");
  const [taskDate, setTaskDate] = useState<string>("");
  const { accessToken } = useSelector((state: any) => state.auth);
  const { listId } = useParams();

  const addItem = () => {
    axios
      .post(
        "http://localhost:3001/task-item/create",
        {
          name: taskName,
          date: taskDate,
          listId: listId,
        },
        {
          headers: {
            authorization: `bearer ${accessToken}`,
          },
        }
      )
      .then((res) => {
        //Add new task to prev array
        setTaskItems((prev) => [
          ...prev,
          { id: res.data.id, name: taskName, date: taskDate, compleated: 0 },
        ]);
      })
      .catch((error) => {
        return console.log(error.response.data.error);
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
