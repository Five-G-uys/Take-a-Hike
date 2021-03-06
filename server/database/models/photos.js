// Import Dependencies
const { DataTypes } = require('sequelize');
const { db } = require('../index.js');

// Create Schema
const Photos = db.define('photos', {
  _id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  img: { type: DataTypes.BLOB, allowNull: false }, // (RENE !!!!!!!!)
  description: { type: DataTypes.STRING(2000), allowNull: false },
  user_id: { type: DataTypes.INTEGER, allowNull: false, foreignKey: true, references: { model: 'users', key: '_id' } },
  trail_id: { type: DataTypes.INTEGER, allowNull: false, foreignKey: true, references: { model: 'trails', key: '_id' } },
});

// Export Schema
module.exports = {
  Photos,
};
