const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  res.render("base", {
    title: "Aluno",
    view: "aluno/show",
  });
});

router.get("/add",  (req, res) => {
  res.render("base", {
    title: "Add Aluno",
    view: "aluno/add",
  });
});

router.get("/edit", async (req, res) => {

  res.render("base", {
    title: "Editar Aluno",
    view: "aluno/edit",

  });
});

module.exports = router;
