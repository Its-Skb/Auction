// server/models/Bid.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const AuctionItem = require('./AuctionItem');
const User = require('./User');

const Bid = sequelize.define('Bid', {
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

Bid.belongsTo(User); // Associate Bid with User
Bid.belongsTo(AuctionItem); // Associate Bid with AuctionItem

module.exports = Bid;