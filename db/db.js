import dotenv from "dotenv";
import { Client } from "pg";
import async from "../middleware/async";

dotenv.config();

const client = new Client(async, {
  user: process.env.RDS_USERNAME,
  host: process.env.RDS_HOSTNAME,
  database: process.env.RDS_DATABASE,
  password: process.env.RDS_PASSWORD,
  port: process.env.RDS_PORT,
});

client
  .connect()
  .then(() => console.log("Database is connected"))
  .catch((err) => console.error("connection error", err.stack));
