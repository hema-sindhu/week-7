// incss30.jsx
import React from 'react';

const Wrapper = ({ children }) => {
  // Inline styles
  const wrapperStyle = {
    backgroundColor: '#f8f9fa',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' // Optional: Adds a subtle shadow
  };

  return (
    <div style={wrapperStyle}>
      {children}
    </div>
  );
};

export default Wrapper;
