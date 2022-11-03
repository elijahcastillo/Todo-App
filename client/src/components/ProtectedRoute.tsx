import axios from "axios";
import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setToken, setUsername } from "../store/authStore";

const ProtectedRoute = () => {
  const [loading, setLoading] = useState(true);

  //{ auth: { username: string; accessToken: string } }
  const { accessToken } = useSelector((state: any) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };

  const refreshToken = () => {
    axios
      .get("http://localhost:3001/refresh", {
        withCredentials: true,
      })
      .then((res) => {
        //get & set new access token if valid refresh token
        const newAccessToken = res.data.accessToken;
        dispatch(setToken(newAccessToken));
      })
      .catch((error) => {
        //both access & refresh token were bad
        navigate("/");
        console.log(error.response.data.error);
      });
  };

  useEffect(() => {
    axios
      .post(
        "http://localhost:3001/auth/check-token",
        {
          authorization: `bearer ${accessToken}`,
        },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.data.ok === true) {
          dispatch(setUsername(res.data.username));
          setLoading(false);
        }
      })
      .catch((error) => {
        refreshToken();
        return console.log(error.response.data.error);
      });
  }, [accessToken]);

  if (loading) return <div>loading...</div>;

  return <Outlet />;
};

export default ProtectedRoute;
