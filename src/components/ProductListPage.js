import React, { useState } from 'react';
import productsData from '../data/products.json';
import ProductCard from './ProductCard';
import Pagination from './Pagination';
import '../styles/ProductListPage.css'
const itemsPerPage = 5; // Adjust the number of items per page

const ProductListPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = productsData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='product-list-page'>
      <div style={{display:"flex", flexDirection : "row", justifyContent:'space-around' }}>
        {currentItems.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div style={{ }}>
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
