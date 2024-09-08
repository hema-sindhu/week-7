// props12.jsx
import React from 'react';
import PropTypes from 'prop-types';

const LibraryItem = ({ title, author, yearPublished }) => {
  // Inline styles
  const cardStyle = {
    backgroundColor: '#f0f4f8',
    padding: '20px',
    borderRadius: '10px',
    marginBottom: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '350px',
    textAlign: 'left'
  };

  const titleStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#1a237e'
  };

  const authorStyle = {
    fontSize: '16px',
    color: '#3949ab',
    marginBottom: '10px'
  };

  const yearStyle = {
    fontSize: '14px',
    color: '#5c6bc0'
  };

  return (
    <div style={cardStyle}>
      <div style={titleStyle}>{title}</div>
      <div style={authorStyle}>Author: {author}</div>
      <div style={yearStyle}>Published: {yearPublished}</div>
    </div>
  );
};

// Adding PropTypes for prop validation
LibraryItem.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  yearPublished: PropTypes.number.isRequired
};

export default LibraryItem;
