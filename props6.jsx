// props6.jsx
import React from 'react';

const ProfileCard = ({ username, bio, profilePicture }) => {
  // Inline styles
  const cardStyle = {
    backgroundColor: '#e1f5fe',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
    marginBottom: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '250px'
  };

  const profilePictureStyle = {
    borderRadius: '50%',
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    marginBottom: '10px'
  };

  const usernameStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px'
  };

  const bioStyle = {
    fontSize: '14px',
    color: '#555'
  };

  return (
    <div style={cardStyle}>
      <img src={profilePicture} alt={username} style={profilePictureStyle} />
      <div style={usernameStyle}>{username}</div>
      <div style={bioStyle}>{bio}</div>
    </div>
  );
};

export default ProfileCard;
