const sequelize = require('../config');

async function initializeDatabase() {
  try {
    await sequelize.authenticate();
    console.log('***-------[INITDB] Database connection established.');

    await sequelize.sync();
    console.log('***-------[INITDB] Models synchronized with the database.');

    // Additional operations can be performed here

  } catch (error) {
    console.error('***-------[INITDB] Database initialization error:', error);
  }
}

module.exports = initializeDatabase;
