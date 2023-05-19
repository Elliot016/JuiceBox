const express = require("express");
const { getAllUsers } = require("../db");
const usersRouter = express.Router();

usersRouter.use((req, res, next) => {
  console.log("A request is being made to /users");
  next();

  //res.send({ message: "hello from /users!" });
});
usersRouter.get("/", async (req, res) => {
  const users = await getAllUsers();
  res.send({
    users,
  });
});

usersRouter.post("/login", async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    next({
      name: "MissingCredentialsError",
      message: "Please provide username and password",
    });
  }
  try {
    const user = await getUserByUsername(username);
    if (user && user.password === password) {
      res.send({ message: "You're In!" });
    } else {
      next({
        name: "InvalidCredentialsError",
        message: "Invalid username or password",
      });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = usersRouter;
