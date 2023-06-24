import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ReactStars from 'react-rating-stars-component';

function RatePost() {
  const settings = {
    size: 25,
    value: 2.5,
    edit: true,
    onChange: (value) => {
      console.log('value: ', value);
    },
  };
  return (
    <div>
      <Row className='mt-3 '>
        <Col sm='12' className='me-5  d-flex align-items-center'>
          <div className='rate-name  d-inline ms-3 mt-1 '>علي محمد</div>
          <ReactStars {...settings} />
        </Col>
      </Row>
      <Row className='border-bottom mx-2'>
        <Col className='d-felx me-4 pb-2'>
          <textarea
            className='input-form-area p-2 mt-3'
            rows='2'
            cols='20'
            placeholder='اكتب تعليقك....'
          />
          <div className=' d-flex justify-content-end al'>
            <div className='product-cart-add px-3  py-2 text-center d-inline'>
              اضف تعليق
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default RatePost;
