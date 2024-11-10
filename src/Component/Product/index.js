import React from 'react';
import './style.css';

const productsData = [
  { id: 1, name: 'Product 1', price: '$49.99', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Product 2', price: '$59.99', image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Product 3', price: '$69.99', image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Product 4', price: '$79.99', image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Product 4', price: '$79.99', image: 'https://via.placeholder.com/150' },

  // Add more products as needed
];

const Items = () => {
  return (
    <div className="products-container">
      <h2 className="products-heading">Our Products</h2>
      <div className="products-grid">
        {productsData.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
            <button className="product-button">View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;
