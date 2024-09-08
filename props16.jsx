import React from 'react';
import PropTypes from 'prop-types';

function ProfileInfo({ username, bio, profilePicture }) {
  return (
    <div>
      <img src={profilePicture} alt={`${username}'s profile`} />
      <h2>{username}</h2>
      <p>{bio}</p>
    </div>
  );
}

// Defining PropTypes for ProfileInfo
ProfileInfo.propTypes = {
  username: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  profilePicture: PropTypes.string.isRequired,
};

export default ProfileInfo;
