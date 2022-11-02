import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth";

import refreshRouter from "./routes/refresh";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

//routes
app.use("/auth", authRouter);
app.use("/refresh", refreshRouter);

app.listen("3001", (): void => {
  console.log("Server Running on port 3001");
});
