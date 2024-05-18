const { findAllUsers } = require("../services/user");

const getAllUsers = async (req, res) => {
    const results = await findAllUsers();

    res.json(results);
}

module.exports = {
    getAllUsers
}