import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [auctionItems, setAuctionItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAuctionItems = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/auctions');
        setAuctionItems(response.data);
      } catch (error) {
        console.error('Error fetching auction items:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchAuctionItems();
  }, []);

  return (
    <div className="home-container">
      <h1>Welcome to the Auction App</h1>
      {loading ? (
        <p>Loading auction items...</p>
      ) : (
        <ul>
          {auctionItems.map(item => (
            <li key={item.id}>
              <Link to={`/auction/${item.id}`}>
                <h3>{item.title}</h3>
                <p>Starting Bid: ${item.starting_bid}</p>
                <p>Current Highest Bid: ${item.current_highest_bid || 0}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;