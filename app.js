const express = require("express");
const rotaLivro = require("./rotas/r-livro");

const app = express();

app.get("/", (req, res) => {
  res.send("ola bry");
});

app.use("/livros", rotaLivro);

const prot = 8000;

app.listen(prot, () => {
  console.log("Estou escutando a porta 8000");
});
