const {
  findAllUsers,
  findById,
  createUser,
  updateUser,
  deleteUser,
  postEmail,
} = require("../services/users");

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
  const user = req.body;

  const result = await createUser(user);

  if (result) {
    res.json({ message: "Criado com sucesso!" });
  } else {
    res.json({ message: "Usuario ja existe" });
  }
};

const putUser = async (req, res) => {
  const { id } = req.params;
  const user = req.body;
  const result = await updateUser(id, user);
  if (!result) {
    return res.json({ message: "Usuario não encontrado" });
  }
  return res.json({ message: "Atualizado com Sucesso!" });
};

const removeUser = async (req, res) => {
  const { id } = req.params;
  const result = await deleteUser(id);
  if (!result) {
    return res.json({ message: "Usuario não encontrado" });
  }
  return res.json({ message: "Deletado com Sucesso!" });
};

const loginUser = async (req, res) => {
  const { user_email } = req.body;
  const token = req.headers;

  const result = await postEmail(user_email);

  return res.json(result);
};

module.exports = {
  getAllUsers,
  getById,
  postUser,
  putUser,
  removeUser,
  loginUser,
};
