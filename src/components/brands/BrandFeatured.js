import React from 'react';
import { Container, Row } from 'react-bootstrap';
import SubTitle from '../utility/SubTitle';
import BrandCard from './BrandCard';
import brand1 from '../../assets/images/brand1.png';
import brand2 from '../../assets/images/brand2.png';
import brand3 from '../../assets/images/brand3.png';

function BrandFeatured({ title, btnTitle, routerPath }) {
  return (
    <Container>
      <Row className="mt-4 mb-5">
        <SubTitle title={title} btnTitle={btnTitle} routerPath={routerPath} />
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

export default BrandFeatured;
