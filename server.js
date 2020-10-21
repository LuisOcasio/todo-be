import express from "express";
import dotenv from "dotenv";

dotenv.config();

const server = express();
const port = process.env.PORT;

server.get("/", (req, res) => {
  res.send("Hello World!");
});

server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
