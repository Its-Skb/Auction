// server/routes/bidRoutes.js
const express = require('express');
const { placeBid, getBidHistory, getHighestBid } = require('../controllers/bidController');
const { authenticate } = require('../utils/middleware');
const router = express.Router();

router.post('/', authenticate, placeBid);
router.get('/:auctionItemId/history', getBidHistory);
router.get('/:auctionItemId/highest', getHighestBid);

module.exports = router;