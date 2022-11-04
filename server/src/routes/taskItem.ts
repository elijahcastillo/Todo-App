import express, { Request, Response, Router } from "express";
import db from "../db";
const router: Router = express.Router();

router.post("/", (req: Request, res: Response) => {
  const name = args.name;
  const date = args.date;
  const listId = args.listId;

  await dataBase("INSERT INTO task_item (name, date, listId) VALUES (?,?,?)", [
    name,
    date,
    listId,
  ]).catch((error) => {
    return console.log("Add List Error" + error);
  });

  const data = await dataBase("SELECT LAST_INSERT_ID()");

  //get Id of inserted Row to send back
  const insertedId = data[0]["LAST_INSERT_ID()"];

  return insertedId;
});

export default router;
