import axios from "axios";
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setToken, setUsername } from "../redux/slices/authSlice";

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
        const newUsername = res.data.username;
        dispatch(setToken(newAccessToken));
        dispatch(setUsername(newUsername));
      })
      .catch((error) => {
        //both access & refresh token were bad, back to login
        navigate("/");
        console.log(error.response.data.error);
      });
  };

  useEffect(() => {
    axios
      .get(
        "http://localhost:3001/auth/check-token",

        { headers: { authorization: `bearer ${accessToken}` } }
      )
      .then((res) => {
        //Token is valid
        if (res.data.ok === true) {
          dispatch(setUsername(res.data.username));
          setLoading(false);
        }
      })
      .catch((error) => {
        //access token either dosent exist or is expired
        refreshToken();
        return console.log(error.response.data.error);
      });
  }, [accessToken]);

  if (loading) return <div>loading...</div>;

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default ProtectedRoute;
