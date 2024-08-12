const express = require("express");
const {
  getAllEnderecos,
  getEnderecoById,
  postEndereco,
  putEndereco,
  removeEndereco,
} = require("../controllers/enderecos");

const route = express.Router();

route.get("/", getAllEnderecos);

route.get("/pesquisarPorId/:id", getEnderecoById);

route.post("/", postEndereco);

route.put("/update/:id", putEndereco);

route.delete("/delete/:id", removeEndereco);

module.exports = route;
