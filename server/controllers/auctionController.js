// server/controllers/auctionController.js
const AuctionItem = require('../models/AuctionItem');

exports.createAuctionItem = async (req, res) => {
  const { title, description, starting_bid, end_date } = req.body;
  const userId = req.user.id; // Assuming user ID is available in req.user
  try {
    const auctionItem = await AuctionItem.create(title, description, starting_bid, end_date, userId);
    res.status(201).json(auctionItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateAuctionItem = async (req, res) => {
  const { id } = req.params;
  const { title, description, starting_bid, end_date } = req.body;
  try {
    const updatedItem = await AuctionItem.update(id, title, description, starting_bid, end_date);
    if (!updatedItem) {
      return res.status(404).json({ error: 'Auction item not found' });
    }
    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};