const express = require("express");
const Database = require("better-sqlite3");

const rotaLivro = require("./rotas/r-livro");
const LivroService = require("./servicos/s-livrosdb");

const db = new Database("biblioteca.db");
db.exec(`
  CREATE TABLE IF NOT EXISTS livros (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
    )
    `);

const livroService = new LivroService(db);

const app = express();
app.use(express.json());
app.use((req, res, next) => {
  req.livroService = livroService;
  next();
});
app.use("/livros", rotaLivro);

const prot = 8000;

app.listen(prot, () => {
  console.log("Estou escutando a porta 8000");
});

// db.close();
