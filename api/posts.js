const express = require("express");
const userRouter = express.Router();
const postsRouter = express.Router();

postsRouter.use((req, res, next) => {
  console.log("requests is being made to /posts");
  next();
});

const { getAllPosts } = require("../db");

postsRouter.get("/", async (req, res) => {
  const posts = await getAllPosts();

  res.send({
    posts,
  });
});

module.exports = postsRouter;
