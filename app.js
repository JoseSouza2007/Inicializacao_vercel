const express = require("express");
const path = require("path");
const app = express();


app.use(express.static(path.join(__dirname, 'public')));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const indexRouter = require("./routes/index");
app.use("/", indexRouter);

const categoriaRouter = require("./routes/categorias");
app.use("/categorias", categoriaRouter);

const quemsomosRouter = require("./routes/quemsomos");
app.use("/quemsomos", quemsomosRouter);

const alunoRouter = require("./routes/aluno");
app.use("/aluno", alunoRouter);


app.listen(3000, () => {
  console.log("Servidor em execução na porta 3000");
});
