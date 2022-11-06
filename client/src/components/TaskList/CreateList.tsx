import React, { useState } from "react";
import { StyledCreateList } from "../../css/CreateList.styled";
import { StyledCreate } from "../../css/TaskHome.styled";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { TaskList } from "./GetTaskLists";
import { setTaskList } from "../../redux/slices/authSlice";

import { useAddTaskListMutation } from "../../redux/api";

const CreateList = () => {
  const [listName, setListName] = useState("");
  //const { accessToken, TaskList } = useSelector((state) => state.auth);
  //const disptach = useDispatch();

  const [addNewTask, result] = useAddTaskListMutation();

  const addTask = () => {
    addNewTask({ name: listName })
      .unwrap()
      .then((fulfilled) => console.log(fulfilled))
      .catch((rejected) => console.error(rejected));

    setListName("");
  };

  return (
    <StyledCreateList>
      <div className="offsetContainer">
        <StyledCreate>
          <h1 className="title">Create New Task List</h1>
          <div className="newTaskContainer">
            <div className="newTaskInputWrapper">
              <div className="newTaskInput">
                <h3 className="inputTitle">Name</h3>
                <input
                  className="inp"
                  type="text"
                  placeholder="ex: Homework"
                  value={listName}
                  onChange={(e) => setListName(e.target.value)}
                />
              </div>
            </div>
            <div className="newTaskFooter">
              <button onClick={addTask}>Create List</button>
            </div>
          </div>
        </StyledCreate>
        <Link to="/home/all">
          <button className="backBtn">Back</button>
        </Link>
      </div>
    </StyledCreateList>
  );
};

export default CreateList;
