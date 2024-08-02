const express = require("express");
const {
  getAllUsers,
  getById,
  postUser,
  putUser,
  removeUser,
  loginUser,
} = require("../controllers/users");
const { fields } = require("../middlewares/user");

const route = express.Router();

route.get("/", getAllUsers);

route.get("/:id", getById);

route.post("/", fields, postUser);

route.post("/login", loginUser);

route.put("/:id", fields, putUser);

route.delete("/:id", removeUser);

module.exports = route;
