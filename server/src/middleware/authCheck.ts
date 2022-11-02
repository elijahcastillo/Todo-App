import { verify } from "jsonwebtoken"

const isAuthenticated = (parent, args, context) => {
  const authorization = context.req.headers["authorization"];

  //nothing in the headers
  if (!authorization) throw new Error("Not Authenticated 1");

  try {
    //get token: ex-> Bearer {token}
    const token = authorization.split(" ")[1];

    //get payload -> userId
    const payload = verify(token, process.env.ACCESS_TOKEN_SECRET);
    context.req.payload = payload;
  } catch (error) {
    console.log(error, "isAuth Error Middleware");
    throw new Error("Not Authenticated 2");
  }
};