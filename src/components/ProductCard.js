import React from 'react';
import '../styles/ProductCard.css'
const ProductCard = ({ product }) => {
  const { id, img, name, price, quantity } = product;

  return (
    <div class="container">
      <div class="card">
        <div class="face face1">
          <div class="content">
            <img src={img} alt={name} width={'300px'} height={'200px'} />
          </div>
        </div>
        <div class="face face2">
          <div class="content">
            <h3>Product ID: {id}</h3>
            <p>Name: {name}</p>
            <p>Price: ${price}</p>
            <p>Quantity in Stock: {quantity}</p>
            <div className='button'>
              <button>Edit</button>
              <button>View</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
