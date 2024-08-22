import React from 'react';
import AuctionItemForm from '../components/AuctionItemForm';

const CreateAuctionItem = () => {
  const handleSuccess = () => {
    alert('Auction item created successfully!');
    window.location.href = '/'; // Redirect to home page
  };

  return (
    <div>
      <h2>Create Auction Item</h2>
      <AuctionItemForm onSuccess={handleSuccess} />
    </div>
  );
};

export default CreateAuctionItem;