import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import passport from "passport";
require("../config/passport-setup");
import { Auth, User } from "../routes/index";

dotenv.config();

const server = express();
server.use(cors());
server.use(helmet());
server.use(morgan("combined"));
server.use(passport.initialize());

server.use("/", User);
server.use("/auth", Auth);

export default server;
