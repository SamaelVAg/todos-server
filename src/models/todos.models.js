const { DataTypes } = require('sequelize');
const db = require('../utils/database');

const Todos = db.define('todos', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    isCompleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        field: 'is_completed',
    },
});

module.exports = Todos;
