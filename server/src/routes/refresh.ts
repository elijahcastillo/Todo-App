import express, { Request, Response, Router } from "express";
import { verify, JwtPayload } from "jsonwebtoken";
import {
  createAccessToken,
  createRefreshToken,
  sendRefreshToken,
} from "../helper/authHelp";
import db from "../db";
const router: Router = express.Router();

router.post("/", async (req, res) => {
  const token = req.cookies.jid;

  if (!token) {
    return res.send({ ok: false, accessToken: "", userId: "", username: "" });
  }

  let payload: any = null;

  try {
    payload = verify(token, "refreshToken");
  } catch (error) {
    return res
      .status(500)
      .send({ ok: false, accessToken: "", userId: "", username: "" });
  }

  //token is valid, send back access token
  //get user
  const user = await db("SELECT * FROM users WHERE id = ?", [
    payload.userId,
  ]).catch((error: Error) => {
    console.log("Refresh Token Database Error" + error);
  });

  if (!user) {
    res.send({
      ok: false,
      accessToken: "",
      userId: "",
      username: "",
    });
  }

  //create new refresh token (not needed but will keep user logged in)
  sendRefreshToken(res, createRefreshToken(user[0]));

  //send new access token
  return res.send({
    ok: true,
    accessToken: createAccessToken(user[0]),
    userId: payload.userId,
    username: payload.username,
  });
});

export default router;
