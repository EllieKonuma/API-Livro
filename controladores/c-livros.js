const {
  getTodosLivros,
  getLivroPorId,
  insereLivro,
  modificaLivro,
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

function patchLivro(req, res) {
  try {
    const id = req.params.id;

    const body = req.body;

    const modificado = modificaLivro(body, id);

    if (!modificado) {
      return res.status(404).send({ error: "Livro não encontrado" });
    }

    res.send(modificado);
  } catch {
    res.status(500);
    
    res.send({ error: "Erro ao modificar livro" });
  }
}

module.exports = {
  getLivros,
  getLivro,
  postLivro,
  patchLivro,
};
