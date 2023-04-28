import jwt from "jsonwebtoken";
import fs from "fs";

const privateKey = fs.readFileSync("./config/private.pem");
// const publicKey = fs.readFileSync("./config/publicKey.pem")
function createToken(payload) {
  return jwt.sign(payload, privateKey, { algorithm: "RS256" });
}

export default { createToken };
