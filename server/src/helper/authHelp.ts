import { sign } from "jsonwebtoken";

export const createAccessToken = (user: { id: number; username: string }) => {
  return sign({ userId: user.id, username: user.username }, "accessToken", {
    expiresIn: "10m",
  });
};

export const createRefreshToken = (user: { id: number; username: string }) => {
  return sign({ userId: user.id, username: user.username }, "refreshToken", {
    expiresIn: "1d",
  });
};

export const sendRefreshToken = (res: any, token: any) => {
  res.cookie("jid", token, {
    httpOnly: true,
  });
};

// {
//   "username": "person2",
//   "password": "secret"
// }
