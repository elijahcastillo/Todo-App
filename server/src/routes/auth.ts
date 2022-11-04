import express, { Request, Response, Router } from "express";
import db from "../db";
import { compare, hash } from "bcrypt";
import {
  createAccessToken,
  createRefreshToken,
  sendRefreshToken,
} from "../helper/authHelp";
import { isAuthenticated } from "../middleware/authCheck";
const router: Router = express.Router();

interface userData {
  username: string;
  password: string;
}

router.post("/register", async (req: Request, res: Response) => {
  const { username, password }: { username: string; password: string } =
    req.body;

  console.log(username, password);

  const oldUser = await db("SELECT * FROM users WHERE username = (?)", [
    username,
  ]);
  console.log(oldUser);

  if (oldUser.length > 0)
    return res.status(409).json({ error: "Email already in use" });

  //Hash incoming password
  const hashedPassword = await hash(password, 10).catch((error) => {
    return console.log("Hash Error" + error);
  });

  console.log(hashedPassword);

  //Insert User into db
  await db("INSERT INTO users (username, password) VALUES (?,?)", [
    username,
    hashedPassword,
  ]).catch((error: Error) => {
    return res.status(500).json({ error: error.message });
  });

  return true;
});

router.post("/login", async (req: Request, res: Response) => {
  const { username, password }: { username: string; password: string } =
    req.body;

  console.log(username, password);

  //get User from db
  const dbUser = await db("SELECT * FROM users WHERE username = ?", [
    username,
  ]).catch((error: Error) => {
    return res.status(500).json({ error: error.message });
  });

  //Check User Exists
  if (dbUser.length == 0) {
    return res.status(400).json({ error: "No User Found" });
  }

  //Compare passwords
  const oldPassword = dbUser[0].password;
  const validUser = await compare(password, oldPassword);

  if (!validUser) {
    return res.status(400).json({ error: "username or password is wrong" });
  }

  //Login User, Return Token
  const token = createAccessToken(dbUser[0]);

  //refresh token
  sendRefreshToken(res, createRefreshToken(dbUser[0]));

  return res.status(200).json({ accessToken: token });
});

router.get("/check-token", isAuthenticated, (req: Request, res: Response) => {
  const { username } = req.body.payload;
  res.status(200).json({
    ok: true,
    username: username,
  });
});

export default router;
