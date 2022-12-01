import React, { useEffect, useState } from "react";
import { StyledNavbar } from "../css/Navbar.styled";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import GetTaskLists from "./TaskList/GetTaskLists";
import { setNav } from "../redux/slices/authSlice";
import TaskStatus from "./InfoBar/TaskStatus";
import FilterTaskItems from "./InfoBar/FilterTaskItems";
import { ReactComponent as Ham } from "../assets/bars.svg";
import axios from "axios";
import { toast } from "react-toastify";

const Navbar = () => {
  const { username, showNav } = useSelector((state: any) => state.auth);
  const [showListInfo, setShowListInfo] = useState(true);
  const dispatch = useDispatch();
  const { listId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (listId === undefined) {
      setShowListInfo(false);
    } else {
      setShowListInfo(true);
    }
  }, [listId]);

  const logoutUser = () => {
    axios
      .post(
        "http://localhost:3001/auth/logout",
        { test: "ok" },
        { withCredentials: true }
      )
      .then((res) => console.log(res));

    navigate("/");
    toast.success("Logged out");
  };

  return (
    <StyledNavbar>
      <div className="smallNav">
        <h1 className="logo">Todo</h1>
        <div onClick={() => dispatch(setNav(true))}>
          <Ham className="hamburg" />
        </div>
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
        <div className="bottomSection">
          <button className="logout" onClick={logoutUser}>
            Logout
          </button>
        </div>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
