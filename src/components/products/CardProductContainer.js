import React from 'react';
import SubTitle from '../utility/SubTitle';
import { Container, Row } from 'react-bootstrap';
import ProductCard from './ProductCard';

function CardProductContainer({ title, btnTitle, routerPath }) {
  return (
    <Container>
      <Row className='mt-4 mb-5'>
        <SubTitle title={title} btnTitle={btnTitle} routerPath={routerPath} />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Row>
    </Container>
  );
}

export default CardProductContainer;
