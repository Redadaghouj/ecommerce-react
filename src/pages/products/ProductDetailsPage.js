import React from 'react';
import CategoryHeader from '../../components/category/CategoryHeader';
import ProductDetails from '../../components/products/ProductDetails';
import { Container } from 'react-bootstrap';

function ProductDetailsPage() {
  return (
    <div className='set-height'>
      <CategoryHeader />
      <Container>
        <ProductDetails />
      </Container>
    </div>
  );
}

export default ProductDetailsPage;
