const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const server = express();

const port = process.env.PORT;

server.use(express.json());
server.use(helmet());
server.use(cors());
server.use(morgan("combined"));

server.get("/", (req, res) => {
  res.send(`<h1>This server is up and running.</h1>`);
});

module.exports = server;
