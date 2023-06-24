import React from 'react';
import Slider from '../../components/home/Slider';
import HomeCategory from '../../components/home/HomeCategory';
import CardProductContainer from '../../components/products/CardProductContainer';
import DiscountSection from '../../components/home/DiscountSection';
import BrandFeatured from '../../components/brands/BrandFeatured';

function HomePage() {
  return (
    <div>
      <Slider />
      <HomeCategory />
      <CardProductContainer
        title="الأكثر مبيعا"
        btnTitle="المزيد"
        routerPath="/products"
      />
      <DiscountSection />
      <CardProductContainer
        title="احدث الازياء"
        btnTitle="المزيد"
        routerPath="/products"
      />
      <BrandFeatured
        title="اشهر الماركات"
        btnTitle="المزيد"
        routerPath="/brands"
      />
    </div>
  );
}

export default HomePage;
