const express = require("express");
const path = require("path");

const app = express();

let storedEmails = [];

//Config arquivos publicos
app.use(express.static("public"));

//Config EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//Config do Body
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("home");
});

app.post("/register", (req, res) => {
  const { email } = req.body;

  if (email) {
    storedEmails.push(email);
    res.redirect("/success");
  } else {
    res.redirect("/");
  }
});

app.get("/success", (req, res) => {
  res.render("success");
});

app.get("/emails", (req, res) => {
  res.render("emails", { emails: storedEmails });
});

app.post("/emails/delete", (req, res) => {
  const { email } = req.body;
  storedEmails = storedEmails.filter((item) => item !== email);
  res.redirect("/emails");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
