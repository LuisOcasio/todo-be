import { Client } from "pg";

const client = new Client({
  user: process.env.RDS_USERNAME,
  host: process.env.RDS_HOSTNAME,
  database: process.env.RDS_DATABASE,
  password: process.env.RDS_PASSWORD,
  port: process.env.RDS_PORT,
  ssl: true,
});

client
  .connect()
  .then(() => console.log("Database is connected"))
  .catch((err) => console.error("connection error", err.stack));
