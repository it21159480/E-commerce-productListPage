import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import Pagination from './Pagination';
import '../styles/ProductListPage.css'
import axios from 'axios';
const itemsPerPage = 8; // Adjust the number of items per page

const ProductListPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productList, setProductlist] = useState([]);
  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:8080/products");
      setProductlist(res.data);
      console.log("Data fetched");
    } catch (err) {
      console.error("Error fetching data:", err.response || err.message || err);
    }
  };

  useEffect(() => {
    getData()
  }, []);



  // Calculate the index of the first and last items for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const rowDivideItem = indexOfFirstItem + 4;


  const currentItems = productList.slice(indexOfFirstItem, rowDivideItem);
  const secondRow = productList.slice(rowDivideItem, indexOfLastItem);
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='product-list-page'>
      <div className='product-list'>
        {currentItems.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      <div className='product-list'>
        {secondRow.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      <div style={{ justifyContent: 'center' }}>
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={productList.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default ProductListPage;
