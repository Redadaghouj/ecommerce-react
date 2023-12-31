import React from 'react';
import { Col } from 'react-bootstrap';

function CategoryCard({ title, img, background }) {
  return (
    <Col
      xs="6"
      sm="6"
      md="4"
      lg="2"
      className="d-flex justify-content-around my-4 my-xxl-2"
    >
      <div className="allCard mb-3 ">
        <div
          className="category-card "
          style={{ backgroundColor: `${background}` }}
        ></div>
        <img alt="zcv" src={img} className="category-card-img" />
        <p className="category-card-text my-2">{title}</p>
      </div>
    </Col>
  );
}

export default CategoryCard;
