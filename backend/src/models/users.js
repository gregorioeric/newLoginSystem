const connection = require("./connect");

const allUsers = async () => {
    const [results] = await connection.execute(
        'SELECT * FROM users'
    );
    return results;
}

module.exports = {
    allUsers
};