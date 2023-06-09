const express = require("express");
const tagsRouter = express.Router();

tagsRouter.use((req, res, next) => {
  console.log("Request is being made to tags");
  next();
});

const { getAllTags } = require("../db");

tagsRouter.get("/", async (req, res) => {
  const tags = await getAllTags();

  res.send({
    tags,
  });
});

module.exports = tagsRouter;
