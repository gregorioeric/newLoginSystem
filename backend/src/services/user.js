const { allUsers } = require("../models/users");

const findAllUsers = async () => {
    const results = await allUsers();
    const data = {
        total: results.length,
        results: results
    }
    return data;
}

module.exports = {
    findAllUsers
}