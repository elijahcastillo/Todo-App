import React, { useState } from "react";
import { StyledLogin } from "../css/Login.styled";
import Reminder from "../assets/Reminder.svg";
import axios from "axios";

interface UserCredentials {
  username: string;
  password: string;
}

const Login = () => {
  const [action, setAction] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const loginUser = async () => {
    setLoading(true);
    const response = await axios
      .post("http://localhost:3001/auth/login", {
        username,
        password,
      } as UserCredentials)
      .catch((error) => {
        return console.log(error.response.data.error);
      });
    setLoading(false);
    if (!response) return;
    console.log(response);
  };

  const signUpUser = async () => {
    setLoading(true);
    const response = await axios
      .post("http://localhost:3001/auth/register", {
        username,
        password,
      } as UserCredentials)
      .catch((error) => {
        return console.log(error.response.data.error);
      });
    setLoading(false);
    if (!response) return;

    console.log(response);
  };

  return (
    <StyledLogin>
      <div className="svgContainer">
        <h1 className="compMoto">A New Way to Get More Done</h1>
        <img src={Reminder} />
      </div>
      <div className="loginContainer">
        <div className="formWrapper">
          <div className="formInfo">{action ? "Sign Up" : "Login"}</div>
          <div className="formBody">
            <div className="formInput">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="formInput">
              <input
                type="text"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="formFooter">
            <p className="message" onClick={() => setAction(!action)}>
              {action ? "Already a Member?" : "Not a Member?"}
            </p>
            <button
              className="sub"
              disabled={loading}
              onClick={action ? signUpUser : loginUser}
            >
              {loading ? "Loading..." : "Submit"}
            </button>
          </div>
        </div>
      </div>
    </StyledLogin>
  );
};

export default Login;
