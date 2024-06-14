const connection = require("./connect");

const allUsers = async () => {
  const [results] = await connection.query("SELECT * FROM users");
  return results;
};

const userById = async (id) => {
  const [result] = await connection.execute(
    "SELECT * FROM users WHERE user_id = ?",
    [id]
  );
  return result;
};

const insertUser = async (name, email, password) => {
  const users = await allUsers();
  const findUser = users.find((e) => e.email_user === email);
  console.log(findUser);
  if (findUser) {
    console.log(false);
    return false;
  }

  const [result] = await connection.execute(
    "INSERT INTO users (nome_user, email_user, user_password) VALUES (?, ?, ?)",
    [name, email, password]
  );
  console.log(result);
  return result;
};

module.exports = {
  allUsers,
  userById,
  insertUser,
};
