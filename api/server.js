import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import passport from "passport";
import "../config/passport-setup";
import { Auth, User } from "../routes/index";

dotenv.config();

const server = express();
server.use(cors());
server.use(helmet());
server.use(morgan("combined"));
server.use(passport.initialize());

const port = process.env.PORT;

server.use("/", User);
server.use("/auth", Auth);

server.get("/", (req, res) => {
  res.send(`<h1>This server is up and running.</h1>`);
});

server.listen(port, () => {
  console.log(`Server listening on port ${process.env.PORT}!`);
});

export default server;
