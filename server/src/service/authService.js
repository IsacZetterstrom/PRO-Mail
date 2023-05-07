import User from "../database/models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import fs from "fs";

const privateKey = fs.readFileSync("./config/private.pem");
const publicKey = fs.readFileSync("./config/public.pem");

async function authenticateLogin(_id, password) {
  const result = await User.findOne({ _id });
  const isMatch = await bcrypt.compare(password, result.password);
  if (isMatch) {
    const token = jwt.sign({ _id }, privateKey, { algorithm: "RS256" });
    return token;
  } else {
    return undefined;
  }
}

function verify(token) {
  return jwt.verify(token, publicKey);
}

export default { authenticateLogin, verify };
