import { Route, Routes, Outlet } from 'react-router-dom';
import Footer from './components/utility/Footer';
import NavBarLogin from './components/utility/NavbarLogin';
import HomePage from './pages/home/HomePage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import AllCategoryPage from './pages/category/AllCategoryPage';
import AllBrandPage from './pages/brand/AllBrandPage';
import ShopProductsPage from './pages/products/ShopProductsPage';
import ProductDetailsPage from './pages/products/ProductDetailsPage';
import CartPage from './pages/cart/CartPage';
import PaymentMethodPage from './pages/checkout/PaymentMethodPage';
import AdminAllProductsPage from './pages/admin/AdminAllProductsPage';
import UserAllOrders from './pages/user/UserAllOrders';
import AdminAllOrdersPage from './pages/admin/AdminAllOrdersPage';
import AdminOrderDetailsPage from './pages/admin/AdminOrderDetailsPage';
import AdminAddBrandPage from './pages/admin/AdminAddBrandPage';
import AdminAddCategoryPage from './pages/admin/AdminAddCategoryPage';
import AdminAddSubCategoryPage from './pages/admin/AdminAddSubCategoryPage';
import AdminAddProductPage from './pages/admin/AdminAddProductPage';

function App() {
  return (
    <div className='font'>
      <NavBarLogin />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/categories' element={<AllCategoryPage />} />
        <Route path='/brands' element={<AllBrandPage />} />
        <Route path='/' element={<Outlet />}>
          <Route path='/products' element={<ShopProductsPage />} />
          <Route path='/products/:id' element={<ProductDetailsPage />} />
        </Route>
        <Route path='/cart' element={<CartPage />} />
        <Route path='/order/paymethoud' element={<PaymentMethodPage />} />
        <Route path='/admin' element={<Outlet />}>
          <Route path='allproducts' element={<AdminAllProductsPage />} />
          <Route path='allorders' element={<AdminAllOrdersPage />} />
          <Route path='orders/:id' element={<AdminOrderDetailsPage />} />
          <Route path='addbrand' element={<AdminAddBrandPage />} />
          <Route path='addcategory' element={<AdminAddCategoryPage />} />
          <Route path='addsubcategory' element={<AdminAddSubCategoryPage />} />
          <Route path='addproduct' element={<AdminAddProductPage />} />
        </Route>
        <Route path='/user' element={<Outlet />}>
          <Route path='allorders' element={<UserAllOrders />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
