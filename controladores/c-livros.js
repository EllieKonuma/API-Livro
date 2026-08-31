const {
  getTodosLivros,
  getLivroPorId,
  insereLivro,
} = require("../servicos/s-livros");

function getLivros(req, res) {
  try {
    const livros = getTodosLivros();
    res.send(livros);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

function getLivro(req, res) {
  try {
    const id = req.params.id;
    const livro = getLivroPorId(id);
    res.send(livro);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function postLivro(req, res) {
  try {
    const livroInserido = insereLivro(req.body);
    res.status(201);
    res.send(livroInserido);
  } catch (error) {
    res.status(500);
    res.send({ error });
  }
}

module.exports = {
  getLivros,
  getLivro,
  postLivro,
};
