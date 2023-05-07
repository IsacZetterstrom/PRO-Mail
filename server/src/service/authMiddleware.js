import Jwt from "jsonwebtoken";
import fs from "fs";
import User from "../database/models/user.js";

const privateKey = fs.readFileSync("./config/private.pem");
const publicKey = fs.readFileSync("./config/public.pem");

function auth(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return req.status(401).send("You must have a valid token");
  }
  const data = Jwt.verify(authHeader, privateKey, { algorithms: "RS256" });

  const result = User.findOne({ id: data._id });
  const user = result._conditions;

  if (!user) {
    return req.status(401).send("User was not found");
  }

  req.user = user;

  next();
}

export default { auth };
