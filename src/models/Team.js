const Sequelize = require('sequelize'); 
const sequelize = require('../lib/db/sequelize');


const Team = sequelize.define('team', {
  name: Sequelize.STRING,
  description: Sequelize.TEXT
});

module.exports = Team;