const { findAllUsers, findById, createUser } = require("../services/users");

const getAllUsers = async (req, res) => {
  const results = await findAllUsers();

  res.json(results);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await findById(id);

  res.json(result);
};

const postUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.json({ message: "Os campos não podem ser vazio!" });
  }

  const result = await createUser(name, email, password);

  if (result) {
    res.json({ message: "Criado com sucesso!" });
  } else {
    res.json({ message: "Usuario ja existe" });
  }
};

module.exports = {
  getAllUsers,
  getById,
  postUser,
};
