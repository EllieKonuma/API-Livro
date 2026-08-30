const express = require("express");

const app = express();

const prot = 8000;

app.get("/", (req, res) => {
  res.send("Olá mundo!");
});

app.listen(prot, () => {
  console.log("Estou escutando a porta 8000");
});
