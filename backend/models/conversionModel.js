import { Schema, model } from "mongoose";

const conversionModel = new Schema(
  {
    participants: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    messages: [
      {
        type: Schema.Types.ObjectId,
        ref: "Message",
        required: true,
      },
    ],
  },
  { timestamps: true }
);

const Conversation = new model("Conversation", conversionModel);
export default Conversation;
