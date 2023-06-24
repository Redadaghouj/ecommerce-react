import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import laptops from '../../assets/images/laptops.png';

function DiscountSection() {
  return (
    <Container>
      <Row className="discount-back-color my-3  mx-2 d-flex text-center align-items-center">
        <Col sm="6">
          <div className="discount-title">
            خصم يصل حتي ٪40 على أجهزة اللاب توب
          </div>
        </Col>
        <Col sm="6">
          <img className="discount-img" src={laptops} alt="laptops" />
        </Col>
      </Row>
    </Container>
  );
}

export default DiscountSection;
