// props14.jsx
import React from 'react';
import PropTypes from 'prop-types';

const FilmDetails = ({ title, director, releaseYear }) => {
  // Inline styles
  const cardStyle = {
    backgroundColor: '#fbe9e7',
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
    color: '#d84315'
  };

  const directorStyle = {
    fontSize: '16px',
    color: '#bf360c',
    marginBottom: '10px'
  };

  const releaseYearStyle = {
    fontSize: '14px',
    color: '#ff5722'
  };

  return (
    <div style={cardStyle}>
      <div style={titleStyle}>{title}</div>
      <div style={directorStyle}>Director: {director}</div>
      <div style={releaseYearStyle}>Released: {releaseYear}</div>
    </div>
  );
};

// Adding PropTypes for prop validation
FilmDetails.propTypes = {
  title: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  releaseYear: PropTypes.number.isRequired
};

export default FilmDetails;
