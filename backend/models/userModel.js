import { Schema, model } from "mongoose";
import jwt from "jsonwebtoken";

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
  }
  // { timestamps: true }
);

userModel.pre("save", async function (next) {
  console.log(this);
});

userModel.methods.generateToken = async function (userId) {
  const userData = this;
  console.log(userData);
  try {
    return jwt.sign(
      {
        userId: this.id,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "15d",
      }
    );
  } catch (error) {
    console.log("Error while generating token", error);
  }
};

const User = new model("User", userModel);
export default User;
