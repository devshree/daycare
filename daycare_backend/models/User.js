const { DataTypes } = require('sequelize');
const sequelize = require('../config');

// Define the User model
const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  address: {
    type: DataTypes.JSONB, // Use the custom Address data type
    allowNull: true,
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      isPhoneNumber: function (value) {
        // Custom validation function to check phone number format
        const phoneNumberRegex = /^[0-9]{10}$/; // Assuming 10-digit phone numbers
        if (!phoneNumberRegex.test(value)) {
          throw new Error('[User Model] Invalid phone number format');
        }
      },
    },
  },
  dateOfBirth: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
});

module.exports = User;
