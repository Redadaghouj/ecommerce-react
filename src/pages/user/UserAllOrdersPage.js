import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import UserSideBar from '../../components/user/UserSideBar';
import UserAllOrders from '../../components/user/UserAllOrders';

function UserAllOrdersPage() {
  return (
    <Container className='set-height'>
      <Row className='py-3'>
        <Col sm='3' xs='2' md='2'>
          <UserSideBar />
        </Col>

        <Col sm='9' xs='10' md='10'>
          <UserAllOrders />
        </Col>
      </Row>
    </Container>
  );
}

export default UserAllOrdersPage;
