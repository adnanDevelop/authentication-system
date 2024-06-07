import { Schema, model } from "mongoose";
import { string } from "zod";

const userModel = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePhoto: {
      type: String,
      default: "https://i.ibb.co/6b8b8Bb/default.png",
    },
    gender: {
      type: String,
      enum: ["male", "female"],
      required: true,
    },
    createdOn: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const User = new model("User", userModel);
export default User;
