function getLivros(req, res) {
  try {
    res.send("Você fez uma requisição do tipo POST");
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  getLivros,
};
