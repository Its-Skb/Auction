// client/src/components/UserProfile.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [bids, setBids] = useState([]);
  const [auctionItems, setAuctionItems] = useState([]);

  useEffect(() => {
    const fetchUserProfile = async () => {
      const response = await axios.get('http://localhost:5000/api/users/profile', {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      });
      setUser(response.data.user);
      setBids(response.data.bids);
      setAuctionItems(response.data.auctionItems);
    };
    fetchUserProfile();
  }, []);

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    const { username, email, firstName, lastName, address } = e.target.elements;
    try {
      const response = await axios.put(
        'http://localhost:5000/api/users/profile',
        {
          username: username.value,
          email: email.value,
          firstName: firstName.value,
          lastName: lastName.value,
          address: address.value,
        },
        {
          headers: {
            Authorization: localStorage.getItem('token'),
          },
        }
      );
      setUser(response.data);
      alert('Profile updated successfully');
    } catch (error) {
      alert(`Error: ${error.response.data.error}`);
    }
  };

  return (
    <div>
      <h2>User Profile</h2>
      {user && (
        <form onSubmit={handleProfileUpdate}>
          <label>
            Username:
            <input type="text" name="username" defaultValue={user.username} />
          </label>
          <label>
            Email:
            <input type="email" name="email" defaultValue={user.email} />
          </label>
          <label>
            First Name:
            <input type="text" name="firstName" defaultValue={user.first_name} />
          </label>
          <label>
            Last Name:
            <input type="text" name="lastName" defaultValue={user.last_name} />
          </label>
          <label>
            Address:
            <input type="text" name="address" defaultValue={user.address} />
          </label>
          <button type="submit">Update Profile</button>
        </form>
      )}
      <h3>Auction Activities</h3>
      <h4>Bids</h4>
      <ul>
        {bids.map(bid => (
          <li key={bid.id}>
            Auction Item: {bid.auction_item_id} - Bid Amount: ${bid.bid_amount}
          </li>
        ))}
      </ul>
      <h4>Auction Items</h4>
      <ul>
        {auctionItems.map(item => (
          <li key={item.id}>
            {item.title} - Starting Bid: ${item.starting_bid}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;