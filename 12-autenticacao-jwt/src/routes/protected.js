const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");

const protectedRouter = express.Router();

protectedRouter.get("/dashboard", authMiddleware, (req, res) => {
  const username = req.authenticatedUser.username;
  res.json({
    message: `Voce está na rota protegida. Bem-vido(a), ${username}`,
  });
});

module.exports = protectedRouter;
