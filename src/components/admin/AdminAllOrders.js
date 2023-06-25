import React from 'react';
import AdminAllOrdersItem from './AdminAllOrdersItem';
import { Row } from 'react-bootstrap';

function AdminAllOrders() {
  return (
    <div>
      <div className='admin-content-text'>ادارة جميع الطلبات</div>
      <Row>
        <AdminAllOrdersItem />
        <AdminAllOrdersItem />
        <AdminAllOrdersItem />
      </Row>
    </div>
  );
}

export default AdminAllOrders;
