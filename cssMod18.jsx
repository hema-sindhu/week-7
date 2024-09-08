import React from 'react';

// Inline styles
const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const imageStyle = {
  borderRadius: '50%',
  border: '3px solid #ddd', // Light gray border
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', // Shadow effect
  width: '100px', // Adjust as needed
  height: '100px', // Adjust as needed
  objectFit: 'cover', // Ensure the image covers the circular area
};

const ProfilePicture = ({ src, alt }) => {
  return (
    <div style={containerStyle}>
      <img style={imageStyle} src={src} alt={alt} />
    </div>
  );
};

export default ProfilePicture;
