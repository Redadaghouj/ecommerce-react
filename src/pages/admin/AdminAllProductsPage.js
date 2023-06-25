import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AdminSideBar from '../../components/admin/AdminSideBar';
import AdminAllProducts from '../../components/admin/AdminAllProducts';
import Pagination from '../../components/utility/Pagination';

function AdminAllProductsPage() {
  return (
    <Container className='set-height'>
      <Row className='py-3'>
        <Col sm='3' xs='2' md='2'>
          <AdminSideBar />
        </Col>

        <Col sm='9' xs='10' md='10'>
          <AdminAllProducts />
          {/* <Pagination /> */}
        </Col>
      </Row>
    </Container>
  );
}

export default AdminAllProductsPage;
