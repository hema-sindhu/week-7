// props13.jsx
import React from 'react';
import PropTypes from 'prop-types';

const EventDetails = ({ eventName, date, location }) => {
  // Inline styles
  const cardStyle = {
    backgroundColor: '#e3f2fd',
    padding: '20px',
    borderRadius: '10px',
    marginBottom: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '350px',
    textAlign: 'left'
  };

  const eventNameStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#0d47a1'
  };

  const dateStyle = {
    fontSize: '16px',
    color: '#1976d2',
    marginBottom: '10px'
  };

  const locationStyle = {
    fontSize: '14px',
    color: '#1565c0'
  };

  return (
    <div style={cardStyle}>
      <div style={eventNameStyle}>{eventName}</div>
      <div style={dateStyle}>Date: {date}</div>
      <div style={locationStyle}>Location: {location}</div>
    </div>
  );
};

// Adding PropTypes for prop validation
EventDetails.propTypes = {
  eventName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
};

export default EventDetails;
