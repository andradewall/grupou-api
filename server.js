const express = require("express");
const db = require("./app/db/models");
const bodyParser = require("body-parser");

const app = express();

// Middleware do BodyParser
app.use(bodyParser.json());

// "Force" determina que o servidor tente excluir as tabelas antes de cria-las
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("--- LOG: Tabelas criadas no banco de dados!\n")
// })

// GET na raiz
app.get("/", (req, res) => {
  res.json({ message: "Grupou! API REST" })
});

// Passa toda a instância do Express para o index.js do routes (middleware)
require("./app/routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`--- LOG: Servidor rodando na porta ${PORT}!\n`);
})