import User from "../database/models/user.js";
import bcrypt from "bcrypt";
import jwtUtil from "../Util/jwtUtil.js";

async function authenticate(email, password) {
  const result = await User.findOne({ email });
  const isMatch = await bcrypt.compare(password, result.password);
  console.log(isMatch);
  if (isMatch) {
    console.log({ email });
    return jwtUtil.createToken({ email });
  } else {
    return undefined;
  }
}

export default { authenticate };
