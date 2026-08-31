const fs = require("fs");
const PATH = "livros.json";

function readJson() {
  return JSON.parse(fs.readFileSync(PATH, "utf8"));
}

function writeJson(data) {
  fs.writeFileSync(PATH, JSON.stringify(data, null, 2), "utf8");
}

function getTodosLivros() {
  return readJson();
}

function getLivroPorId(id) {
  const livros = readJson();

  const livroFiltrado = livros.find((livro) => String(livro.id) === String(id));
  return livroFiltrado;
}

function insereLivro(livroNovo) {
  const livros = readJson();

  const novaListaDeLivros = [...livros, livroNovo];

  writeJson(novaListaDeLivros);
  return livroNovo;
}

function modificaLivro(modificacoes, id) {
  let livrosAtuais = readJson();

  const indiceModificado = livrosAtuais.findIndex(
    (livro) => String(livro.id) === String(id),
  );
  if (indiceModificado === -1) return null;

  const conteudoMudado = { ...livrosAtuais[indiceModificado], ...modificacoes };

  livrosAtuais[indiceModificado] = conteudoMudado;

  writeJson(livrosAtuais);
  return conteudoMudado;
}

module.exports = {
  getTodosLivros,
  getLivroPorId,
  insereLivro,
  modificaLivro,
};
