import React from 'react';
import { Link } from 'react-router-dom';

function SubTitle({ title, btnTitle, routerPath }) {
  return (
    <div className="d-flex justify-content-between pt-4 mb-4">
      <div className="sub-tile">{title}</div>
      {btnTitle && (
        <Link to={routerPath} style={{ textDecoration: 'none' }}>
          <div className="shopping-now">{btnTitle}</div>
        </Link>
      )}
    </div>
  );
}

export default SubTitle;
