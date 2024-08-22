// import React, { useState } from 'react';
// import axios from 'axios';

// const AuctionItemForm = ({ auctionItemId, onSuccess }) => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [startingBid, setStartingBid] = useState('');
//   const [endDate, setEndDate] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (auctionItemId) {
//         await axios.put(`http://localhost:5000/api/auctions/${auctionItemId}`, {
//           title,
//           description,
//           starting_bid: startingBid,
//           end_date: endDate,
//         }, {
//           headers: {
//             Authorization: localStorage.getItem('token'),
//           },
//         });
//       } else {
//         await axios.post('http://localhost:5000/api/auctions', {
//           title,
//           description,
//           starting_bid: startingBid,
//           end_date: endDate,
//         }, {
//           headers: {
//             Authorization: localStorage.getItem('token'),
//           },
//         });
//       }
//       onSuccess(); // Call the success handler
//     } catch (error) {
//       alert(`Error: ${error.response.data.error}`);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Title:
//         <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
//       </label>
//       <label>
//         Description:
//         <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
//       </label>
//       <label>
//         Starting Bid:
//         <input type="number" value={startingBid} onChange={(e) => setStartingBid(e.target.value)} required />
//       </label>
//       <label>
//         End Date:
//         <input type="datetime-local" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
//       </label>
//       <button type="submit">{auctionItemId ? 'Update' : 'Create'} Auction Item</button>
//     </form>
//   );
// };

// export default AuctionItemForm;







// client/src/components/AuctionItemForm.js
import React, { useState } from 'react';
import axios from 'axios';

const AuctionItemForm = ({ token }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startingBid, setStartingBid] = useState('');
  const [endDate, setEndDate] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset error state

    // Validate input
    if (!title || !description || !startingBid || !endDate) {
      setError('All fields are required.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/auctions', {
        title,
        description,
        startingBid,
        endDate,
        userId: 1, // Replace with actual user ID from token or context
      }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log('Auction item created:', response.data);
      // Reset form fields if needed
      setTitle('');
      setDescription('');
      setStartingBid('');
      setEndDate('');
    } catch (error) {
      console.error('Error creating auction item:', error);
      setError('Failed to create auction item. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Auction Item</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Starting Bid:</label>
        <input
          type="number"
          value={startingBid}
          onChange={(e) => setStartingBid(e.target.value)}
          required
        />
      </div>
      <div>
        <label>End Date:</label>
        <input
          type="datetime-local"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          required
        />
      </div>
      <button type="submit">Create Auction Item</button>
    </form>
  );
};

export default AuctionItemForm;