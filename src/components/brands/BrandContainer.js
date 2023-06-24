import React from 'react';
import { Container, Row } from 'react-bootstrap';
import BrandCard from './BrandCard';
import brand1 from '../../assets/images/brand1.png';
import brand2 from '../../assets/images/brand2.png';
import brand3 from '../../assets/images/brand3.png';

function BrandContainer() {
  return (
    <Container>
      <div className="admin-content-text mt-4">كل الماركات</div>
      <Row className="mt-5 mb-4">
        <BrandCard img={brand1} />
        <BrandCard img={brand2} />
        <BrandCard img={brand3} />
        <BrandCard img={brand1} />
        <BrandCard img={brand2} />
        <BrandCard img={brand3} />
        <BrandCard img={brand1} />
        <BrandCard img={brand2} />
        <BrandCard img={brand3} />
        <BrandCard img={brand1} />
        <BrandCard img={brand2} />
        <BrandCard img={brand3} />
      </Row>
    </Container>
  );
}

export default BrandContainer;
