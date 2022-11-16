import React, { useEffect, useState } from "react";
import { StyledNavbar } from "../css/Navbar.styled";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import GetTaskLists from "./TaskList/GetTaskLists";
import { setNav } from "../redux/slices/authSlice";
import TaskStatus from "./InfoBar/TaskStatus";
import FilterTaskItems from "./InfoBar/FilterTaskItems";

const Navbar = () => {
  const { username, showNav } = useSelector((state: any) => state.auth);
  const [showListInfo, setShowListInfo] = useState(true);
  const dispatch = useDispatch();

  const { listId } = useParams();
  useEffect(() => {
    if (listId === undefined) {
      setShowListInfo(false);
    } else {
      setShowListInfo(true);
    }
  }, [listId]);

  return (
    <StyledNavbar>
      <div className="smallNav">
        <h1 className="logo">Todo</h1>
        <div onClick={() => dispatch(setNav(true))}>HIT</div>
      </div>
      {showNav ? (
        <div className="mask" onClick={() => dispatch(setNav(false))}></div>
      ) : null}
      <div className={showNav ? "container showNav" : "container"}>
        <div className="topSection">
          <h1 className="logo">Todo</h1>
          <p className="username">
            Welcome Back,<br></br> {username}!
          </p>
        </div>
        <Link
          to="/home/create"
          className="addTaskList"
          onClick={() => dispatch(setNav(false))}
        >
          +
        </Link>
        {showListInfo ? (
          <div className="taskInfo">
            <TaskStatus />
            <FilterTaskItems />
          </div>
        ) : null}

        <div className="middleSection">
          <GetTaskLists />
        </div>
        <div className="bottomSection"></div>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
