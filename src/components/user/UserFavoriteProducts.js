import React from 'react';
import { Row } from 'react-bootstrap';
import ProductCard from '../products/ProductCard';
import Pagination from '../utility/Pagination';

function UserFavoriteProducts() {
  return (
    <div>
      <div className='admin-content-text pb-4'>قائمة المفضلة</div>
      <Row className='justify-content-start'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Row>
      <Pagination />
    </div>
  );
}

export default UserFavoriteProducts;
