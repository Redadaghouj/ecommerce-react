import React from 'react';
import AdminAllProductsCard from './AdminAllProductsCard';

function AdminAllProducts() {
  return (
    <div>
      <div className='admin-content-text'>ادارة جميع المنتجات</div>
      <AdminAllProductsCard />
      <AdminAllProductsCard />
      <AdminAllProductsCard />
      <AdminAllProductsCard />
    </div>
  );
}

export default AdminAllProducts;
