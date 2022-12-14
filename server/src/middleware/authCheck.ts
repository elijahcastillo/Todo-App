import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export const isAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authorization = req.headers.authorization;

  //nothing in the headers
  if (!authorization) return res.status(400).json({ error: "No token" });

  //get token: ex-> Bearer {token}
  const token = authorization.split(" ")[1];

  try {
    //get payload -> userId
    const payload = verify(token, "accessToken");
    req.body.payload = payload;

    next();
  } catch (error) {
    return res.status(400).json({ error: "Token not Good" });
  }
};
