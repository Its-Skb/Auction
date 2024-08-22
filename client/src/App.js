// client/src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import CreateAuctionItem from './components/CreateAuctionItem';
import AuctionItemList from './components/AuctionItemList';
import AuctionItemDetails from './components/AuctionItemDetails';

const App = () => {
  const [token, setToken] = useState('');

  return (
    <Router>
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login">
          <Login setToken={setToken} />
        </Route>
        <Route path="/create-auction">
          <CreateAuctionItem token={token} />
        </Route>
        <Route path="/auctions/:id" render={(props) => <AuctionItemDetails {...props} token={token} />} />
        <Route path="/auctions">
          <AuctionItemList token={token} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;