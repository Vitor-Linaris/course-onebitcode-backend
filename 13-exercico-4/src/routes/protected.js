const express = require("express");
const usersController = require("../controllers/usersController");
const { ensureAuth, ensureAdmin } = require("../middlewares/authMiddleware");

const protectedRouter = express.Router();

protectedRouter.get("/users", ensureAuth, ensureAdmin, usersController.index);
protectedRouter.get(
  "/users/:id",
  ensureAuth,
  ensureAdmin,
  usersController.show
);
protectedRouter.post("users", ensureAuth, ensureAdmin, usersController.save);
protectedRouter.delete(
  "/users/:id",
  ensureAuth,
  ensureAdmin,
  usersController.delete
);

module.exports = protectedRouter;
