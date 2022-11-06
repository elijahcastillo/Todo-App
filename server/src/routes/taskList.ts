import { createSecretKey } from "crypto";
import express, { Request, Response, Router } from "express";
import db from "../db";
import { isAuthenticated } from "../middleware/authCheck";
const router: Router = express.Router();

router.post("/create", isAuthenticated, async (req: Request, res: Response) => {
  const { name } = req.body;
  const { userId } = req.body.payload;

  await db("INSERT INTO task_list (name, userId) VALUES (?,?)", [
    name,
    userId,
  ]).catch((error: Error) => {
    return res.status(500).json({ error: "Cannot add task list" });
  });

  const data = await db("SELECT LAST_INSERT_ID()");

  //get Id of inserted Row to send back
  const insertedId = data[0]["LAST_INSERT_ID()"];

  return res.status(200).json({ ok: true, id: insertedId });
});

router.get("/", isAuthenticated, async (req: Request, res: Response) => {
  const { userId } = req.body.payload;

  const data = await db("SELECT id, name FROM task_list WHERE userId=(?)", [
    userId,
  ]).catch(() => {
    return res.status(500).json({ error: "Cannot get task list" });
  });

  return res.status(200).json({ ok: true, taskList: data });
});

router.post("/delete", async (req: Request, res: Response) => {
  const { listId } = req.body;

  await db("DELETE from task_list WHERE id=(?)", [listId]).catch(() => {
    return res.status(500).json({ error: "Cannot delete task list" });
  });

  return res.status(200).json({ ok: true });
});

export default router;
