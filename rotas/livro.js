const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.send("Olá mundo!");
});

module.exports = router