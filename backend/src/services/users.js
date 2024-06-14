const { allUsers, userById, insertUser } = require("../models/users");

const findAllUsers = async () => {
  const results = await allUsers();
  const data = {
    total: results.length,
    results: results,
  };
  return data;
};

const findById = async (id) => {
  const [result] = await userById(id);
  console.log(result);
  if (!result) {
    return false;
  }

  return result;
};

const createUser = async (name, email, password) => {
  const result = await insertUser(name, email, password);
  return result;
};

module.exports = {
  findAllUsers,
  findById,
  createUser,
};
