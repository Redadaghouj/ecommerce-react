import React from 'react';
import { Container } from 'react-bootstrap';
import PaymentMethod from '../../components/checkout/PaymentMethod';

function PaymentMethodPage() {
  return (
    <Container className='set-height'>
      <PaymentMethod />
    </Container>
  );
}

export default PaymentMethodPage;
