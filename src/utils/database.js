const { Sequelize } = require('sequelize');

const dBName = 'todo_db'

const db = new Sequelize({
    database: `${dBName}`,
    username: 'postgres',
    host: 'localhost',
    port: '5432',
    password: 'root',
    dialect: 'postgres',
});

module.exports = db;