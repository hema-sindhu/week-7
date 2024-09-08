// incss29.jsx
import React from 'react';

const Label = ({ text }) => {
  // Inline styles
  const labelStyle = {
    fontSize: '16px',
    color: '#007bff',
    display: 'block'
  };

  return (
    <label style={labelStyle}>
      {text}
    </label>
  );
};

export default Label;
