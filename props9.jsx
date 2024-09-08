// props9.jsx
import React from 'react';

const JobCard = ({ jobTitle, companyName, location }) => {
  // Inline styles
  const cardStyle = {
    backgroundColor: '#e8f5e9',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'left',
    marginBottom: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '350px'
  };

  const jobTitleStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#388e3c'
  };

  const companyNameStyle = {
    fontSize: '16px',
    color: '#2e7d32',
    marginBottom: '10px'
  };

  const locationStyle = {
    fontSize: '14px',
    color: '#616161'
  };

  return (
    <div style={cardStyle}>
      <div style={jobTitleStyle}>{jobTitle}</div>
      <div style={companyNameStyle}>{companyName}</div>
      <div style={locationStyle}>{location}</div>
    </div>
  );
};

export default JobCard;
