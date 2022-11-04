import { createSecretKey } from "crypto";
import express, { Request, Response, Router } from "express";
import db from "../db";
import { isAuthenticated } from "../middleware/authCheck";
const router: Router = express.Router();

router.post("/create", isAuthenticated, async (req: Request, res: Response) => {
  const { name } = req.body;
  const { userId } = req.body.payload;

  console.log(userId, name, "LIST");

  await db("INSERT INTO task_list (name, userId) VALUES (?,?)", [
    name,
    userId,
  ]).catch((error: Error) => {
    return res.status(500).json({ error: "Cannot add task list" });
  });

  const data = await db("SELECT LAST_INSERT_ID()");

  //get Id of inserted Row to send back
  const insertedId = data[0]["LAST_INSERT_ID()"];
  console.log;

  return res.status(200).json({ ok: true, id: insertedId });
});

router.get("/", isAuthenticated, async (req: Request, res: Response) => {
  const { userId } = req.body.payload;
  console.log(userId, "ID GETLIST");

  const data = await db("SELECT id, name FROM task_list WHERE userId=(?)", [
    userId,
  ]).catch((error: Error) => {
    return res.status(500).json({ error: "Cannot get task list" });
  });

  console.log(data, "GET ALL TASKS");
  return res.status(200).json({ ok: true, taskList: data });
});

router.post("/test", async (req: Request, res: Response) => {
  const head = req.headers.authorization;
  console.log(head, "OOOO");

  return res.status(202).send(head);
});

export default router;
