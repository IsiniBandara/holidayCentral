import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    slct_permission: {
      type: String,
      required: true,
    },
    fname: {
      type: String,
      required: true,
      unique: true,
    },
    lname: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    collection: "UserInfo",
  }
);

export default mongoose.model("User", UserSchema);
