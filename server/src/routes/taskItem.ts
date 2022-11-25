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

  const data = await db(
    "SELECT task_item.id, task_item.name, task_item.date, task_item.compleated FROM task_item JOIN task_list ON task_item.listId = task_list.id WHERE userId = (?) AND listId = (?)",
    [userId, listId]
  ).catch((error: Error) => {
    return res.status(500).json({ error: error.message });
  });

  return res.status(200).json({ ok: true, taskItems: data });
});

router.post("/delete", isAuthenticated, async (req: Request, res: Response) => {
  const { id } = req.body;

  await db("DELETE from task_item WHERE id=(?)", [id]).catch(() => {
    return res.status(500).json({ error: "Connot Delete Task Item" });
  });

  return res.status(200).json({ ok: true });
});

router.post(
  "/update-compleation",
  isAuthenticated,
  async (req: Request, res: Response) => {
    const { id } = req.body;

    await db("UPDATE task_item SET compleated = NOT compleated WHERE id=(?)", [
      id,
    ]).catch(() => {
      return res
        .status(500)
        .json({ error: "Connot Update Compleation of Task Item" });
    });

    return res.status(200).json({ ok: true });
  }
);

router.post("/update", isAuthenticated, async (req: Request, res: Response) => {
  console.log("Update Task Text");
  const { taskId } = req.body;
  const { newName } = req.body;
  const { newDate } = req.body;

  console.log(taskId, newName, newDate, "WORK PLEASE");

  await db("UPDATE task_item SET name=(?),date=(?) WHERE id=(?)", [
    newName,
    newDate,
    taskId,
  ]).catch(() => {
    console.log("BAD");
    return res.status(201).json({ error: "Connot Update Item" });
  });

  return res.status(200).json({ ok: true });
});

export default router;
