import React from 'react';
import '../styles/ProductCard.css'
const ProductCard = ({ product}) => {
  

  return (
    <div className="container">
      <div className="card">
        <div className="face face1">
          <div className="content">
            <img src={product.img} alt={product.name} width={'300px'} height={'200px'} />
          </div>
        </div>
        <div className="face face2">
          <div className="content">
            <h3>Product ID: {product.ids}</h3>
            <p>Name: {product.name}</p>
            <p>Price: ${product.price}</p>
            <p>Quantity in Stock: {product.quantity}</p>
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
