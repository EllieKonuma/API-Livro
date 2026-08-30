const { Router } = require("express");
const { getLivros } = require("../controladores/c-livros");

const router = Router();

router.get("/", getLivros);

router.post("/", (req, res) => {});

router.patch("/", (req, res) => {
  res.send("Você fez uma requisição do tipo PATCH");
});

router.delete("/", (req, res) => {
  res.send("Você fez uma requisição do tipo DELETE");
});

module.exports = router;
