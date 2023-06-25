import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AdminAddCategory from '../../components/admin/AdminAddCategory';
import AdminSideBar from '../../components/admin/AdminSideBar';

function AdminAddCategoryPage() {
  return (
    <Container className='set-height'>
      <Row className='py-3'>
        <Col sm='3' xs='2' md='2'>
          <AdminSideBar />
        </Col>

        <Col sm='9' xs='10' md='10'>
          <AdminAddCategory />
        </Col>
      </Row>
    </Container>
  );
}

export default AdminAddCategoryPage;
