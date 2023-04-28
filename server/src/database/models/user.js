import mongoose from "mongoose";

const RegisterSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Ange ett namn"],
    trim: true,
  },
  surname: {
    type: String,
    required: [true, "Ange ett efternamn"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Välj en e-postadress"],
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Välj ett lösenord"],
    trim: true,
  },
  mailbox: {
    type: Object,
  },
});

const User = mongoose.model("user", RegisterSchema);

export default User;
