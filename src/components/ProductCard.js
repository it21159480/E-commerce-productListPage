import React from 'react';
import '../styles/ProductCard.css'
const ProductCard = ({ product }) => {
  const { id, name, price, quantity } = product;

  return (
    <div className="product-card">
      <p>Product ID: {id}</p>
      <p>Name: {name}</p>
      <p>Price: ${price}</p>
      <p>Quantity in Stock: {quantity}</p>
      <button>Edit</button>
      <button>View</button>
    </div>
  );
};

export default ProductCard;
