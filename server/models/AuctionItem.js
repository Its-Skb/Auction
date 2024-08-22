// server/models/AuctionItem.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');

const AuctionItem = sequelize.define('AuctionItem', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  startingBid: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  endDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

AuctionItem.belongsTo(User); // Associate AuctionItem with User

module.exports = AuctionItem;