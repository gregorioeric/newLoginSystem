const connection = require("./connect");
const jwt = require("jsonwebtoken");

const selectAllUsers = async () => {
  const [results] = await connection.query("SELECT * FROM users");
  return results;
};

const selectUserById = async (id) => {
  const [result] = await connection.execute(
    "SELECT * FROM users WHERE user_id = ?",
    [id]
  );
  return result;
};

const insertUser = async (user) => {
  const { user_name, user_email, user_password, user_date, user_phone } = user;
  const [result] = await connection.execute(
    "INSERT INTO users (user_name, user_email, user_password, user_date, user_phone) VALUES (?, ?, ?, ?, ?)",
    [user_name, user_email, user_password, user_date, user_phone]
  );

  return result;
};

const updateUserById = async (id, user) => {
  const { user_name, user_email, user_password, user_phone } = user;
  const [result] = await connection.execute(
    "UPDATE users SET user_name = ?, user_email = ?, user_password = ?, user_phone = ? WHERE user_id = ?",
    [user_name, user_email, user_password, user_phone, id]
  );
  return result;
};

const deleteUserById = async (id) => {
  const [result] = await connection.execute(
    "DELETE FROM users WHERE user_id = ?",
    [id]
  );
  return result;
};

const selectUser = async (user_email) => {
  const [[result]] = await connection.execute(
    "SELECT * FROM users WHERE user_email = ?",
    [user_email]
  );

  if (!result) {
    return false;
  }

  const userId = result.user_id;

  // Cria um token JWT
  const token = jwt.sign({ userId }, process.env.SECRETJWT, {
    expiresIn: "1h",
  });

  console.log("token", token);

  return result;
};

module.exports = {
  selectAllUsers,
  selectUserById,
  insertUser,
  updateUserById,
  deleteUserById,
  selectUser,
};
