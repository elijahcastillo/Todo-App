import express, { Request, Response, Router } from "express";
import db from "../db";
import { isAuthenticated } from "../middleware/authCheck";
const router: Router = express.Router();

router.post("/create", isAuthenticated, async (req: Request, res: Response) => {
  const { name, date, listId } = req.body;

  await db("INSERT INTO task_item (name, date, listId) VALUES (?,?,?)", [
    name,
    date,
    listId,
  ]).catch((error: Error) => {
    return res.status(500).json({ error: error.message });
  });

  const data = await db("SELECT LAST_INSERT_ID()");

  //get Id of inserted Row to send back
  const insertedId = data[0]["LAST_INSERT_ID()"];

  return res.status(200).json({ ok: true, id: insertedId });
});

router.post("/by-id", isAuthenticated, async (req: Request, res: Response) => {
  const { userId } = req.body.payload;
  const { listId } = req.body;
  console.log(userId, listId, "TESTING");
  console.log(req.body, "???????");

  const data = await db(
    "SELECT task_item.id, task_item.name, task_item.date, task_item.compleated FROM task_item JOIN task_list ON task_item.listId = task_list.id WHERE userId = (?) AND listId = (?)",
    [userId, listId]
  ).catch((error: Error) => {
    return res.status(500).json({ error: error.message });
  });

  return res.status(200).json({ ok: true, taskItems: data });
});

export default router;
