const { Client } = require("pg");
const dotenv = require("dotenv").config();

const PORT = 3000;
const express = require("express");
const server = express();
const morgan = require("morgan");
require("dotenv").config();

server.listen(PORT, () => {
  console.log("The server is up on port", PORT);
});

server.use(morgan("dev"));
server.use(express.json());

server.use((req, res, next) => {
  console.log("<____Body Logger START____>");
  console.log(req.body);
  console.log("<_____Body Logger END_____>");

  next();
});

const apiRouter = require("./api");
server.use("/api", apiRouter);
