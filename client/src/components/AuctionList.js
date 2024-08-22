// src/components/AuctionList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AuctionList = () => {
  const [auctionItems, setAuctionItems] = useState([]);

  useEffect(() => {
    const fetchAuctionItems = async () => {
      const response = await axios.get('http://localhost:5000/api/auctions');
      setAuctionItems(response.data);
    };
    fetchAuctionItems();
  }, []);

  return (
    <div>
      <h2>Auction Items</h2>
      <ul>
        {auctionItems.map(item => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>Starting Bid: ${item.starting_bid}</p>
            <p>Ends on: {new Date(item.end_date).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AuctionList;