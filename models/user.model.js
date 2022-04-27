const { DataTypes } = require('sequelize');
const { db } = require('../Utils/database');

const User = db.define('user', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('client','employee'),
    defaultValue: 'client',
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'available'
  }
});

module.exports = { User };
