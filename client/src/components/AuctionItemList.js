// client/src/components/AuctionItemList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const AuctionItemList = ({ token }) => {
  const [auctionItems, setAuctionItems] = useState([]);

  useEffect(() => {
    const fetchAuctionItems = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/auctions', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setAuctionItems(response.data);
      } catch (error) {
        alert('Failed to fetch auction items.');
      }
    };
    fetchAuctionItems();
  }, [token]);

  return (
    <Container>
      <Row>
        {auctionItems.map((item) => (
          <Col key={item.id} md={4}>
            <Card>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Card.Text>Starting Bid: {item.startingBid}</Card.Text>
                <Card.Text>End Date: {new Date(item.endDate).toLocaleString()}</Card.Text>
                <Button variant="primary">Place Bid</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AuctionItemList;