require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routeUsers = require("./src/routes/users");
const routeProdutos = require("./src/routes/produtos");
const routeEnderecos = require("./src/routes/enderecos");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", routeUsers);
app.use("/produtos", routeProdutos);
app.use("/enderecos", routeEnderecos);

module.exports = app;
