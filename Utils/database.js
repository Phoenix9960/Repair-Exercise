const { Sequelize } = require('sequelize');

const db = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'root123',
  database: 'Repair_Computers',
  logging: false
})

module.exports = { db };
