import React from "react";
import { StyledNavbar } from "../css/Navbar.styled";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import GetTaskLists from "./TaskList/GetTaskLists";

const Navbar = () => {
  const { username } = useSelector((state: any) => state.auth);
  //console.log(username);

  return (
    <StyledNavbar>
      <div className="topSection">
        <h1 className="logo">Todo</h1>
        <p className="username">
          Welcome Back,<br></br> {username}!
        </p>
      </div>
      <div className="middleSection">
        <Link to="/home/create">+</Link>
        <GetTaskLists />
      </div>
      <div className="bottomSection"></div>
    </StyledNavbar>
  );
};

export default Navbar;
