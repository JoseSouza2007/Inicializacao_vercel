const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  res.render("base", {
    title: "Categorias",
    view: "categorias/show",
  });
});

router.get("/add",  (req, res) => {
  res.render("base", {
    title: "Add Categoria",
    view: "categorias/add",
  });
});

router.get("/edit", async (req, res) => {

  res.render("base", {
    title: "Editar Categoria",
    view: "categorias/edit",

  });
});

module.exports = router;
