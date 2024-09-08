// props10.jsx
import React from 'react';

const SongCard = ({ songTitle, artist, album }) => {
  // Inline styles
  const cardStyle = {
    backgroundColor: '#fce4ec',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'left',
    marginBottom: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '350px'
  };

  const songTitleStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#d81b60'
  };

  const artistStyle = {
    fontSize: '16px',
    color: '#c2185b',
    marginBottom: '10px'
  };

  const albumStyle = {
    fontSize: '14px',
    color: '#880e4f'
  };

  return (
    <div style={cardStyle}>
      <div style={songTitleStyle}>{songTitle}</div>
      <div style={artistStyle}>Artist: {artist}</div>
      <div style={albumStyle}>Album: {album}</div>
    </div>
  );
};

export default SongCard;
