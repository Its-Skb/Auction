// client/src/components/BidForm.js
import React, { useState } from 'react';
import axios from 'axios';

const BidForm = ({ auctionItemId }) => {
  const [bidAmount, setBidAmount] = useState('');

  const handleBidSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/bids', {
        auctionItemId,
        bidAmount: parseFloat(bidAmount),
      });
      alert(`Bid placed: ${response.data.bid_amount}`);
      setBidAmount('');
    } catch (error) {
      alert(`Error: ${error.response.data.error}`);
    }
  };

  return (
    <form onSubmit={handleBidSubmit}>
      <input
        type="number"
        value={bidAmount}
        onChange={(e) => setBidAmount(e.target.value)}
        placeholder="Enter your bid amount"
        required
      />
      <button type="submit">Place Bid</button>
    </form>
  );
};

export default BidForm;