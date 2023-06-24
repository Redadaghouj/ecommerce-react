import React from 'react';
import Pagination from '../../components/utility/Pagination';
import BrandContainer from '../../components/brands/BrandContainer';

function AllBrandPage() {
  return (
    <div className="set-height">
      <BrandContainer />
      <Pagination />
    </div>
  );
}

export default AllBrandPage;
