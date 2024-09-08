// propsType1.jsx
import React from 'react';
import PropTypes from 'prop-types';

const ItemCard = ({ itemName, price, description }) => {
  // Inline styles
  const cardStyle = {
    backgroundColor: '#fff3e0',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'left',
    marginBottom: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '350px'
  };

  const itemNameStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#e65100'
  };

  const priceStyle = {
    fontSize: '16px',
    color: '#ff6f00',
    marginBottom: '10px'
  };

  const descriptionStyle = {
    fontSize: '14px',
    color: '#6d4c41'
  };

  return (
    <div style={cardStyle}>
      <div style={itemNameStyle}>{itemName}</div>
      <div style={priceStyle}>Price: ${price}</div>
      <div style={descriptionStyle}>{description}</div>
    </div>
  );
};

// Adding PropTypes for prop validation
ItemCard.propTypes = {
  itemName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string
};

// Default prop for description (optional)
ItemCard.defaultProps = {
  description: 'No description available'
};

export default ItemCard;
