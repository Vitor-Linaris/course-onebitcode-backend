const express = require("express");
const authController = require("../controllers/authController");
const { optionalAuth } = require("../middlewares/authMiddleware");
const welcomeController = require("../controllers/welcomeController");

const authRouter = express.Router();

authRouter.get("/", authController.index);
authRouter.post("/register", authController.register);
authRouter.post("/login", authController.login);

authRouter.get("/welcome", optionalAuth, welcomeController.welcome);

module.exports = authRouter;
