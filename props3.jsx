// props3.jsx
import React from 'react';

const EventCard = ({ eventName, date, location }) => {
  // Inline styles
  const cardStyle = {
    backgroundColor: '#e3f2fd',
    padding: '20px',
    borderRadius: '10px',
    marginBottom: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
  };

  const eventNameStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px'
  };

  const dateStyle = {
    fontSize: '16px',
    color: '#0288d1',
    marginBottom: '10px'
  };

  const locationStyle = {
    fontSize: '14px',
    color: '#555'
  };

  return (
    <div style={cardStyle}>
      <div style={eventNameStyle}>{eventName}</div>
      <div style={dateStyle}>{date}</div>
      <div style={locationStyle}>Location: {location}</div>
    </div>
  );
};

export default EventCard;
