const Sequelize = require('sequelize');
const db = new Sequelize({
  host: 'localhost',
  port: 5432,
  database: 'hogwarts',
  dialect: 'postgres',
  username: 'postgres',
  password: 'admin',
  logging: false
});

module.exports = db;
