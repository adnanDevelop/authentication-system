import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/db.js";
import router from "./routes/userRoute.js";

dotenv.config({});
const app = express();

app.use(express.json());
app.use("/api", router);
// http://localhost:3000/api/

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on port ${PORT}`);
});
