import React from "react";
import { StyledLogin } from "../css/Login.styled";
import Reminder from "../assets/Reminder.svg";

const Login = () => {
  return (
    <StyledLogin>
      <div className="svgContainer">
        <img src={Reminder} />
      </div>
      <div className="loginContainer">
        <div className="formInfo">A NEW Way to Get More Done</div>
        <div className="formWrapper">
          <input />
        </div>
      </div>
    </StyledLogin>
  );
};

export default Login;
