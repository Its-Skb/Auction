// server/routes/auctionRoutes.js
const express = require('express');
const {
  createAuctionItem,
  getAllAuctionItems,
  getAuctionItemById,
  updateAuctionItem,
  deleteAuctionItem,
} = require('../controllers/auctionController');
const { authenticate } = require('../utils/middleware');
const router = express.Router();

router.post('/', authenticate, createAuctionItem);
router.get('/', getAllAuctionItems);
router.get('/:id', getAuctionItemById);
router.put('/:id', authenticate, updateAuctionItem);
router.delete('/:id', authenticate, deleteAuctionItem);

module.exports = router;