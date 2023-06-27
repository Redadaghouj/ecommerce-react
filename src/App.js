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
import AdminAllOrdersPage from './pages/admin/AdminAllOrdersPage';
import AdminOrderDetailsPage from './pages/admin/AdminOrderDetailsPage';
import AdminAddBrandPage from './pages/admin/AdminAddBrandPage';
import AdminAddCategoryPage from './pages/admin/AdminAddCategoryPage';
import AdminAddSubCategoryPage from './pages/admin/AdminAddSubCategoryPage';
import AdminAddProductPage from './pages/admin/AdminAddProductPage';
import UserAllOrdersPage from './pages/user/UserAllOrdersPage';
import UserFavoriteProductsPage from './pages/UserFavoriteProductsPage';
import UserAddressesPage from './pages/user/UserAddressesPage';
import UserAddAddressPage from './pages/user/UserAddAddressPage';
import UserEditAddressPage from './pages/user/UserEditAddressPage';
import UserProfilePage from './pages/user/UserProfilePage';

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
        <Route path='/order/payment-method' element={<PaymentMethodPage />} />
        <Route path='/admin' element={<Outlet />}>
          <Route path='all-products' element={<AdminAllProductsPage />} />
          <Route path='all-orders' element={<AdminAllOrdersPage />} />
          <Route path='orders/:id' element={<AdminOrderDetailsPage />} />
          <Route path='add-brand' element={<AdminAddBrandPage />} />
          <Route path='add-category' element={<AdminAddCategoryPage />} />
          <Route path='add-subcategory' element={<AdminAddSubCategoryPage />} />
          <Route path='add-product' element={<AdminAddProductPage />} />
        </Route>
        <Route path='/user' element={<Outlet />}>
          <Route path='all-orders' element={<UserAllOrdersPage />} />
          <Route
            path='favorite-products'
            element={<UserFavoriteProductsPage />}
          />
          <Route path='addresses' element={<UserAddressesPage />} />
          <Route path='add-address' element={<UserAddAddressPage />} />
          <Route path='edit-address' element={<UserEditAddressPage />} />
          <Route path='profile' element={<UserProfilePage />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
