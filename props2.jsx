// props2.jsx
import React from 'react';

const BookCard = ({ title, author, yearPublished }) => {
  // Inline styles
  const cardStyle = {
    backgroundColor: '#f5f5f5',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
  };

  const titleStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px'
  };

  const authorStyle = {
    fontSize: '16px',
    color: '#333',
    marginBottom: '10px'
  };

  const yearStyle = {
    fontSize: '14px',
    color: '#777'
  };

  return (
    <div style={cardStyle}>
      <div style={titleStyle}>{title}</div>
      <div style={authorStyle}>by {author}</div>
      <div style={yearStyle}>Published in {yearPublished}</div>
    </div>
  );
};

export default BookCard;
