const {
  getTodosLivros,
  getLivroPorId,
  insereLivro,
  modificaLivro,
  excluirLivro,
} = require("../servicos/DEPRECADOs-livros");

function getLivros(req, res) {
  try {
    // const livros = getTodosLivros();
    const livros = req.livroService.getTodosLivros();

    res.send(livros);
  } catch (error) {
    res.status(500);

    res.send(error);
  }
}

function getLivro(req, res) {
  try {
    const id = req.params.id;

    const livro = req.livroService.getLivroPorId(id);

    res.send(livro);
  } catch (error) {
    res.status(500);

    res.send(error.message);
  }
}

function postLivro(req, res) {
  try {
    if (!req.body.name) throw new Error("Missing name");
    const body = { name: req.body.name };

    const livroInserido = req.livroService.insereLivro(req.body);

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

    const modificado = req.livroService.modificaLivro(body, id);

    if (!modificado) {
      return res.status(404).send({ error: "Livro não encontrado" });
    }

    res.send(modificado);
  } catch (error) {
    console.log(error);
    res.status(500);

    res.send({ error: "Erro ao modificar livro" });
  }
}

function deleteLivro(req, res) {
  try {
    const id = req.params.id;

    const removido = req.livroService.excluirLivro(id);

    if (!removido)
      return res.status(404).send({ error: "Livro não encontrado" });

    res.send(removido);
  } catch {
    res.status(500);

    res.send({ error: "Erro ao deletar livro" });
  }
}

module.exports = {
  getLivros,
  getLivro,
  postLivro,
  patchLivro,
  deleteLivro,
};
