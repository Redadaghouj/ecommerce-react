import React from 'react';
import CategoryContainer from '../../components/category/CategoryContainer';
import Pagination from '../../components/utility/Pagination';

function AllCategoryPage() {
  return (
    <div className="set-height">
      <CategoryContainer />
      <Pagination />
    </div>
  );
}

export default AllCategoryPage;
