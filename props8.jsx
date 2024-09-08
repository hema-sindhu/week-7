// props8.jsx
import React from 'react';

const NewsCard = ({ headline, summary, source }) => {
  // Inline styles
  const cardStyle = {
    backgroundColor: '#e3f2fd',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'left',
    marginBottom: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '350px'
  };

  const headlineStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#1a237e'
  };

  const summaryStyle = {
    fontSize: '16px',
    color: '#424242',
    marginBottom: '10px'
  };

  const sourceStyle = {
    fontSize: '14px',
    color: '#0d47a1'
  };

  return (
    <div style={cardStyle}>
      <div style={headlineStyle}>{headline}</div>
      <div style={summaryStyle}>{summary}</div>
      <div style={sourceStyle}>Source: {source}</div>
    </div>
  );
};

export default NewsCard;
