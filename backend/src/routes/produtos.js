const express = require("express");
const {
  getAllProdutos,
  getProdutoById,
  postProduto,
  putProduto,
  removeProduto,
  getProdutoByName,
} = require("../controllers/produtos");

const route = express.Router();

route.get("/", getAllProdutos);

// route.get("/pesquisaPorId/:id", getProdutoById);
route.get("/:id", getProdutoById);

// route.get("/pesquisa", getProdutoByName);
route.get("/nome/:nome", getProdutoByName);

route.post("/", postProduto);

route.put("/update/:id", putProduto);

route.delete("/delete/:id", removeProduto);

module.exports = route;
