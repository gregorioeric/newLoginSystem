const {
  selectAllUsers,
  selectUserById,
  insertUser,
  updateUserById,
  deleteUserById,
  selectUser,
} = require("../models/users");

const findAllUsers = async () => {
  const results = await selectAllUsers();
  const data = {
    total: results.length,
    results: results,
  };
  return data;
};

const findUserById = async (id) => {
  const [result] = await selectUserById(id);

  if (!result) {
    return false;
  }

  return result;
};

const createUser = async (user) => {
  const { user_email } = user;
  const userEmail = await findAllUsers();
  const findUser = userEmail.results.find((e) => e.user_email === user_email);

  if (findUser) {
    return false;
  }

  const result = await insertUser(user);
  return result;
};

const updateUser = async (id, user) => {
  const findUser = await findUserById(id);

  if (findUser) {
    const result = await updateUserById(id, user);
    return result;
  }

  return false;
};

const deleteUser = async (id) => {
  const findUser = await findUserById(id);

  if (findUser) {
    const result = await deleteUserById(id);
    return result;
  }

  return false;
};

const postEmail = async (user_email) => {
  const result = await selectUser(user_email);

  return result;
};

module.exports = {
  findAllUsers,
  findUserById,
  createUser,
  updateUser,
  deleteUser,
  postEmail,
};
