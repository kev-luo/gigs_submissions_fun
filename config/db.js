require('dotenv').config();
const Sequelize = require('sequelize');

module.exports = new Sequelize('codegigs', 'kevin', process.env.pW, {
  host: 'localhost',
  dialect: 'mysql'
})
