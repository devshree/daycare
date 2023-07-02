const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('daycare', 'appuser', 'daycare', {
  host: 'localhost',
  dialect: 'postgres',
  logging: (...msg) => console.log(`---*-------[Sequelize] ${msg}`)
});

module.exports = sequelize;
