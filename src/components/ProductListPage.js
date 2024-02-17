import React, { useState } from 'react';
import productsData from '../data/products.json';
import ProductCard from './ProductCard';
import Pagination from './Pagination';
import '../styles/ProductListPage.css'
const itemsPerPage = 8; // Adjust the number of items per page

const ProductListPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index of the first and last items for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const rowDivideItem = indexOfFirstItem + 4 ;

 
  const currentItems = productsData.slice(indexOfFirstItem, rowDivideItem);
  const secondRow = productsData.slice(rowDivideItem, indexOfLastItem);
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='product-list-page'>
      <div className='product-list'>
        {currentItems.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className='product-list'>
        {secondRow.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div style={{ justifyContent: 'center' }}>
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={productsData.length}
          paginate={paginate}
        />
      </div>

    </div>
  );
};

export default ProductListPage;
