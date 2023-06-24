import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductGallery from './ProductGallery';
import ProductInfo from './ProductInfo';
import RateContainer from '../rate/RateContainer';
import CardProductContainer from '../products/CardProductContainer';

function ProductDetails() {
  return (
    <div>
      <Row className='py-4'>
        <Col lg='5' xl='4'>
          <ProductGallery />
        </Col>
        <Col lg='7' xl='8'>
          <ProductInfo />
        </Col>
      </Row>
      <RateContainer />
      <CardProductContainer title='منتجات قد تعجبك' />
    </div>
  );
}

export default ProductDetails;
