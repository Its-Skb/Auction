// client/src/components/CreateAuctionItem.js
import React, { useState } from 'react';
import axios from 'axios';

const CreateAuctionItem = ({ token }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startingBid, setStartingBid] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auctions', {
        title,
        description,
        startingBid,
        endDate,
        userId: 1, // Replace with actual user ID from token
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Auction item created successfully!');
    } catch (error) {
      alert('Failed to create auction item.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} required />
      <textarea placeholder="Description" onChange={(e) => setDescription(e.target.value)} required />
      <input type="number" placeholder="Starting Bid" onChange={(e) => setStartingBid(e.target.value)} required />
      <input type="datetime-local" onChange={(e) => setEndDate(e.target.value)} required />
      <button type="submit">Create Auction Item</button>
    </form>
  );
};

export default CreateAuctionItem;