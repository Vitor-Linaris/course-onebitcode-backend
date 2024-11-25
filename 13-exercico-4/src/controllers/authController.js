const { JWT_SECRET } = require("../config/environment");
const users = require("../models/users");
const jwt = require("jsonwebtoken");

module.exports = {
  // GET
  index: (req, res) => {
    res.status(200).json(users.findAll());
  },

  // POST /register
  register: (req, res) => {
    const { name, email, password } = req.body;

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof password !== "string"
    ) {
      return res.status(400).json({ message: "Invalid fields!" });
    }

    const registeredUser = users.registerUser(name, email, password);

    if (!registeredUser) {
      return res.status(400).json({ message: "Email already in use!" });
    }

    res.status(201).json(registeredUser);
  },

  // POST /login
  login: (req, res) => {
    const { email, password } = req.body;

    if (typeof email !== "string" || typeof password !== "string") {
      return res.status(400).json({ message: "Invalid fields!" });
    }

    const user = users.findByEmail(email);

    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    if (user.password !== password) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const payload = { id: user.id, email: user.email };

    const token = jwt.sign(payload, JWT_SECRET, {
      expiresIn: "1d",
    });

    res.json({ token });
  },
};
