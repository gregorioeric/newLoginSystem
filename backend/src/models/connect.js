require("dotenv").config();
const mysql = require("mysql2/promise");

const connection = mysql.createPool({
  host: process.env.HOST, // Seu host do MySQL
  user: process.env.USER, // Seu usuário do MySQL
  port: process.env.PORT, // Porta que o MySQL se conecta
  password: process.env.PASSWORD, // Sua senha do MySQL
  database: process.env.DATABASE, // Nome do banco de dados criado anteriormente
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = connection;
