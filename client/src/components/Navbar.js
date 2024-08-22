import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <h1>Auction App</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/create-auction-item">Create Auction Item</Link></li>
        <li><Link to="/user-profile">Profile</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;