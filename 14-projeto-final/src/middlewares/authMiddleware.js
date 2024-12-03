const jwt = require("jsonwebtoken");
const usersModel = require("../models/usersModel");

module.exports = {
  ensureAuth: (req, res, next) => {
    const authHeaders = req.headers.authorization;
    if (!authHeaders) {
      return res.status(401).json({ message: "Não autorizado" });
    }

    const token = authHeaders.split(" ")[1];

    try {
      const { id } = jwt.verify(token, process.env.JWT_KEY);

      const user = usersModel.getUserById(id);
      if (!user) {
        return res.status(404).json({ message: "Usuário não enccontrado!" });
      }

      req.user = user;
      next();
    } catch (error) {
      res.status(401).json({ message: "Token inválido!" });
    }
  },
};
