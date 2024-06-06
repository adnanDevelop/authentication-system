require("dotenv").config();
const express = require("express");
// const cors = require("cors");
const app = express();
const authRoute = require("./routes/authRoute");
const errorMiddleware = require("./middleware/errorMiddleware");
const dbConnection = require("./db/dbConnection");

// app.use(cors());
app.use(express.json());
app.use("/api", authRoute);
app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  await dbConnection();
  console.log(`Server is running on port ${PORT}`);
});
