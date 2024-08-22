// server/routes/auction.js
const express = require('express');
const AuctionItem = require('../models/AuctionItem');
const Bid = require('../models/Bid');

const router = express.Router();

// Create Auction Item
router.post('/', async (req, res) => {
  const { title, description, startingBid, endDate, userId } = req.body;
  try {
    const newItem = await AuctionItem.create({ title, description, startingBid, endDate, UserId: userId });
    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create auction item.' });
  }
});

// Get All Auction Items
router.get('/', async (req, res) => {
  const items = await AuctionItem.findAll();
  res.json(items);
});

// Place a Bid
router.post('/:id/bid', async (req, res) => {
  const { amount, userId } = req.body;
  const auctionItemId = req.params.id;
  try {
    const newBid = await Bid.create({ amount, UserId: userId, AuctionItemId: auctionItemId });
    res.status(201).json(newBid);
  } catch (error) {
    res.status(400).json({ error: 'Failed to place bid.' });
  }
});

// Get Bids for an Auction Item
router.get('/:id/bids', async (req, res) => {
  const auctionItemId = req.params.id;
  const bids = await Bid.findAll({ where: { AuctionItemId: auctionItemId } });
  res.json(bids);
});

module.exports = router;