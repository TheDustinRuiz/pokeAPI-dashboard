import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

function CardComponent() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Placeholder
                </Card.Text>
            </Card.Body>
      </Card>
    );
  }
  
  export default CardComponent;