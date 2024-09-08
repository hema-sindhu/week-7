import React from 'react';

// Inline styles
const tagStyle = {
  backgroundColor: '#007bff', // Blue background color
  color: '#fff', // White text color
  padding: '8px 16px', // Padding around the text
  borderRadius: '12px', // Rounded corners
  display: 'inline-block', // To make the tag fit its content
  fontSize: '14px', // Font size for the tag text
  fontWeight: '500', // Font weight for emphasis
};

const Tag = ({ text }) => {
  return (
    <span style={tagStyle}>
      {text}
    </span>
  );
};

export default Tag;
