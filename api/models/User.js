// import mongoose from "mongoose";

// const UserSchema = new mongoose.Schema(
//   {
//     slct_permission: {
//       type: String,
//       required: true,
//     },
//     fname: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//     lname: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//     password: {
//       type: String,
//       required: true,
//     },
//   },
//   {
//     collection: "UserInfo",
//   }
// );

// export default mongoose.model("User", UserSchema);

import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    country: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    city: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
  {
    collection: "users",
  }
);

export default mongoose.model("User", UserSchema);
