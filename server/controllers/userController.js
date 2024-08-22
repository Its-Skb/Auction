// server/controllers/userController.js
const User = require('../models/User');
const Bid = require('../models/Bid');
const AuctionItem = require('../models/AuctionItem');

exports.getUserProfile = async (req, res) => {
  const userId = req.user.id; // Use the user ID from the decoded token
  try {
    const user = await User.findById(userId); // Fetch user details
    const bids = await Bid.findByUserId(userId); // Fetch user's bids
    const auctionItems = await AuctionItem.findByUserId(userId); // Fetch user's auction items
    res.status(200).json({ user, bids, auctionItems });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateUserProfile = async (req, res) => {
  const userId = req.user.id;
  const { username, email, firstName, lastName, address } = req.body;
  try {
    const user = await User.update(userId, username, email, firstName, lastName, address);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};