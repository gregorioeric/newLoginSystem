const express = require('express');
const cors = require('cors');
const routeUsers = require('./src/routes/users');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/users', routeUsers);

module.exports = app;