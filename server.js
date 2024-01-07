const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./db");

const path =require('path');
//dot config
dotenv.config();

//mongodb connection
connectDB();

//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/api/v1/auth", require("./routes/userRoutes"));
app.use("/api/v1/student", require("./routes/studentRoutes"));
const PORT = process.env.PORT || 8000;

//listen
app.listen(PORT, () => {
  console.log(
    `Node Server Running In  ModeOn Port ${process.env.PORT}`
      .bgBlue.white
  );
});
