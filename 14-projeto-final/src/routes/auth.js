const express = require("express");
const authController = require("../controllers/authController");
const { ensureAuth } = require("../middlewares/authMiddleware");

const authRouter = express.Router();

authRouter.post("/register", authController.register);
authRouter.post("/login", authController.login);

authRouter.get("/test", ensureAuth, (req, res) => res.json({ message: "ok" }));

module.exports = authRouter;
