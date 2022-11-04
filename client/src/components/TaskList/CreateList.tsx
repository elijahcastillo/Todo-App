import React, { useState } from "react";
import { StyledCreateList } from "../../css/CreateList.styled";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const CreateList = () => {
  const [listName, setListName] = useState<string>("");
  const { accessToken } = useSelector((state: any) => state.auth);

  const addTask = () => {
    console.log("Add Task", listName);

    axios
      .post(
        "http://localhost:3001/task-list/create",
        {
          name: listName,
        },
        {
          headers: {
            authorization: `bearer ${accessToken}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data, "ADD");
      })
      .catch((error) => {
        return console.log(error.response.data.error);
      });

    setListName("");
  };

  return (
    <StyledCreateList>
      <div className="offsetContainer">
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
        <Link to="/home/all">
          <button className="backBtn">Back</button>
        </Link>
      </div>
    </StyledCreateList>
  );
};

export default CreateList;
