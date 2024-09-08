// props1.jsx
import React from 'react';

const ProductCard = ({ productName, price, description }) => {
  // Inline styles
  const cardStyle = {
    backgroundColor: '#f1f1f1',
    padding: '20px',
    borderRadius: '10px',
    marginBottom: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
  };

  const titleStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px'
  };

  const priceStyle = {
    color: '#ff5722',
    fontSize: '16px',
    marginBottom: '10px'
  };

  const descriptionStyle = {
    fontSize: '14px',
    color: '#555'
  };

  return (
    <div style={cardStyle}>
      <div style={titleStyle}>{productName}</div>
      <div style={priceStyle}>${price}</div>
      <div style={descriptionStyle}>{description}</div>
    </div>
  );
};

export default ProductCard;
