import React from 'react';
import { Container, Row } from 'react-bootstrap';
import SubTitle from '../utility/SubTitle';
import CategoryCard from '../category/CategoryCard';
import clothe from '../../assets/images/clothe.png';
import cat2 from '../../assets/images/cat2.png';
import laptop from '../../assets/images/laptop.png';
import sale from '../../assets/images/sale.png';
import pic from '../../assets/images/pic.png';

function HomeCategory() {
  return (
    <Container>
      <Row className="mt-4 mb-5 d-flex justify-content-between">
        <SubTitle
          title="التصنيفات"
          btnTitle="المزيد"
          routerPath="/categories"
        />
        <CategoryCard title="اجهزة منزلية" img={clothe} background="#F4DBA4" />
        <CategoryCard title="اجهزة منزلية" img={cat2} background="#F4DBA4" />
        <CategoryCard title="اجهزة منزلية" img={laptop} background="#0034FF" />
        <CategoryCard title="اجهزة منزلية" img={sale} background="#F4DBA4" />
        <CategoryCard title="اجهزة منزلية" img={clothe} background="#FF6262" />
        <CategoryCard title="اجهزة منزلية" img={pic} background="#F4DBA4" />
      </Row>
    </Container>
  );
}

export default HomeCategory;
