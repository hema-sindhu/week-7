// props4.jsx
import React from 'react';

const MovieCard = ({ title, director, releaseYear }) => {
  // Inline styles
  const cardStyle = {
    backgroundColor: '#f0f4c3',
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

  const directorStyle = {
    fontSize: '16px',
    color: '#455a64',
    marginBottom: '10px'
  };

  const yearStyle = {
    fontSize: '14px',
    color: '#757575'
  };

  return (
    <div style={cardStyle}>
      <div style={titleStyle}>{title}</div>
      <div style={directorStyle}>Directed by: {director}</div>
      <div style={yearStyle}>Released in {releaseYear}</div>
    </div>
  );
};

export default MovieCard;
