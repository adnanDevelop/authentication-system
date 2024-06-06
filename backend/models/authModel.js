const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const signupModel = new Schema({
  name: {
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
    unique: true,
  },
  createdOn: {
    type: Date,
    default: new Date().getTime(),
  },
});

signupModel.pre("save", async function (next) {
  try {
    const user = this;
    const hash_password = await bcrypt.hash(user.password, 10);
    user.password = hash_password;
    console.log(hash_password);
  } catch (error) {
    next(error);
  }
});



const registerUser = new model("registered_user", signupModel);
module.exports = registerUser;
