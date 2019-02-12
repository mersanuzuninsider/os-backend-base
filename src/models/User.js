const Sequelize = require('sequelize'); 
const sequelize = require('../lib/db/sequelize');


const User = sequelize.define('user', {
  name: Sequelize.STRING,
  surname: Sequelize.STRING
});

module.exports = User;