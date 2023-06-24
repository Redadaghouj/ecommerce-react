import React from 'react';
import SearchCountResult from '../../components/utility/SearchCountResult';
import { Container, Row, Col } from 'react-bootstrap';
import CategoryHeader from '../../components/category/CategoryHeader';
import SideFilter from '../../components/utility/SideFilter';
import CardProductContainer from '../../components/products/CardProductContainer';
import Pagination from '../../components/utility/Pagination';

function ShopProductsPage() {
  return (
    <div className="set-height">
      <CategoryHeader />
      <Container>
        <SearchCountResult title="400 نتجية بحث" />
        <Row>
          <Col xs="3" md="2">
            <SideFilter />
          </Col>
          <Col xs="9" md="10">
            <CardProductContainer title="" btnTitle="" />
          </Col>
        </Row>
        <Pagination />
      </Container>
    </div>
  );
}

export default ShopProductsPage;
