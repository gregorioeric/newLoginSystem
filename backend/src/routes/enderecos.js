const express = require("express");
const {
  getAllEnderecos,
  getEnderecoById,
} = require("../controllers/enderecos");

const route = express.Router();

route.get("/", getAllEnderecos);

route.get("/pesquisarPorId/:id", getEnderecoById);

module.exports = route;
