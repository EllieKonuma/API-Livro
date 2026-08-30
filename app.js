const express = require("express");
const rotaLivro = require("./rotas/livro");

const app = express();

app.use('/livros', rotaLivro)

const prot = 8000;

app.listen(prot, () => {
  console.log("Estou escutando a porta 8000");
});
