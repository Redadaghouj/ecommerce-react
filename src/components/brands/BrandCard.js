import React from 'react';
import { Card, Col } from 'react-bootstrap';

function BrandCard({ img }) {
  return (
    <Col
      xs="6"
      sm="6"
      md="4"
      lg="2"
      className="d-flex justify-content-center mb-2"
    >
      <Card
        className="my-1"
        style={{
          width: '100%',
          height: '151px',
          borderRadius: '8px',
          border: 'none',
          backgroundColor: '#FFFFFF',
        }}
      >
        <Card.Img style={{ width: '100%', height: '151px' }} src={img} />
      </Card>
    </Col>
  );
}

export default BrandCard;
