const express = require("express");
const {
  getAllVenda,
  getVendaById,
  postVenda,
} = require("../controllers/vendas");

const route = express.Router();

route.get("/", getAllVenda);

route.get("/:id", getVendaById);

route.post("/", postVenda);

module.exports = route;
