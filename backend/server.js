import express from "express";
import dotenv from "dotenv";
import { connect_db } from "./config.js";
//start the express app......
const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("server is ready 5000");
});
// start the back server listiner
app.listen(5000, () => {
  connect_db();
  console.log("server started at http://localhost:5000");
});
