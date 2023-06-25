import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AdminSideBar from '../../components/admin/AdminSideBar';
import AdminOrderDetails from '../../components/admin/AdminOrderDetails';

function AdminOrderDetailsPage() {
  return (
    <Container className='set-height'>
      <Row className='py-3'>
        <Col sm='3' xs='2' md='2'>
          <AdminSideBar />
        </Col>

        <Col sm='9' xs='10' md='10'>
          <AdminOrderDetails />
        </Col>
      </Row>
    </Container>
  );
}

export default AdminOrderDetailsPage;
