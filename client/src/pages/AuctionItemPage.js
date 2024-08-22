import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BidForm from '../components/BidForm';

const AuctionItemPage = ({ auctionItemId }) => {
  const [auctionItem, setAuctionItem] = useState(null);
  const [highestBid, setHighestBid] = useState(null);
  const [bidHistory, setBidHistory] = useState([]);

  useEffect(() => {
    const fetchAuctionItem = async () => {
      const response = await axios.get(`http://localhost:5000/api/auctions/${auctionItemId}`);
      setAuctionItem(response.data);
    };

    const fetchHighestBid = async () => {
      const response = await axios.get(`http://localhost:5000/api/bids/${auctionItemId}/highest`);
      setHighestBid(response.data);
    };

    const fetchBidHistory = async () => {
      const response = await axios.get(`http://localhost:5000/api/bids/${auctionItemId}/history`);
      setBidHistory(response.data);
    };

    fetchAuctionItem();
    fetchHighestBid();
    fetchBidHistory();
  }, [auctionItemId]);

  return (
    <div>
      {auctionItem && (
        <div>
          <h2>{auctionItem.title}</h2>
          <p>{auctionItem.description}</p>
          <p>Starting Bid: ${auctionItem.starting_bid}</p>
          <p>Ends on: {new Date(auctionItem.end_date).toLocaleString()}</p>
          {highestBid && (
            <div>
              <h3>Current Highest Bid: ${highestBid.bid_amount}</h3>
              <p>Placed by User ID: {highestBid.user_id}</p>
            </div>
          )}
          <BidForm auctionItemId={auctionItemId} />
          <h3>Bid History</h3>
          <ul>
            {bidHistory.map(bid => (
              <li key={bid.id}>
                User ID: {bid.user_id} - Bid Amount: ${bid.bid_amount} - Date: {new Date(bid.created_at).toLocaleString()}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AuctionItemPage;