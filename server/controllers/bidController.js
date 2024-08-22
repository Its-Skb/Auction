// server/controllers/bidController.js
const Bid = require('../models/Bid');

exports.placeBid = async (req, res) => {
  const { auctionItemId, bidAmount } = req.body;
  const userId = req.user.id; // Assuming user ID is available in req.user

  try {
    const highestBid = await Bid.findHighestBid(auctionItemId);
    if (highestBid && bidAmount <= highestBid.bid_amount) {
      return res.status(400).json({ error: 'Bid amount must be higher than the current highest bid.' });
    }

    const bid = await Bid.create(auctionItemId, userId, bidAmount);
    res.status(201).json(bid);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};