import express from "express";
import "dotenv/config";

import cors from "cors";
import connectoToDB from "../server/src/database/db.js";
import router from "./src/router/router.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);
const port = 3002;

async function serverStart() {
  try {
    await connectoToDB();
    app.listen(port, console.log(`server is running on port ${port}`));
  } catch (error) {
    console.log(error);
  }
}

serverStart();
