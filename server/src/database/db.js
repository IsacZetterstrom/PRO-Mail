import mongoose from "mongoose";

const connectoToDB = async () => {
  const url = `mongodb+srv://${process.env.mongoDB_username}:${process.env.mongoDB_password}@promail.4trwkb6.mongodb.net/?retryWrites=true&w=majority`;
  await mongoose.connect(url);
  console.log("connected to db");
};

export default connectoToDB;
