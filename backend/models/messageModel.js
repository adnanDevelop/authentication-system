import { Schema, model } from "mongoose";

const messageModel = new Schema(
  {
    senderId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    receiverId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    message: {
      type: String,
      reqruied: true,
    },
  },
  { timestamps: true }
);

const Message = new model("Message", messageModel);
