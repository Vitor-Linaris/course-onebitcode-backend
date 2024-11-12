const express = require("express");
const path = require("path");
const router = require("./routes");

const app = express();

/* Configuração do EJS */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

/* Configuração de arquivos estáticos */
app.use(express.static("public"));

/* Configuração para ler dados da requisição */
app.use(express.urlencoded({ extended: true }));

app.use(router);

const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});