const express = require("express");
const { getAllUsers, getById, postUser } = require("../controllers/users");

const route = express.Router();

route.get("/", getAllUsers);

route.get("/:id", getById);

route.post("/", postUser);

module.exports = route;
