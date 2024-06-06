const mongoose = require("mongoose");
const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONG_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.log("Error while connecting with database", error);
  }
};

module.exports = dbConnection;
