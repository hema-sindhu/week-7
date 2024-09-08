import React from 'react';
import PropTypes from 'prop-types';

function MusicCard({ songTitle, artist, album }) {
  return (
    <div>
      <h2>{songTitle}</h2>
      <p><strong>Artist:</strong> {artist}</p>
      <p><strong>Album:</strong> {album}</p>
    </div>
  );
}

MusicCard.propTypes = {
  songTitle: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  album: PropTypes.string.isRequired,
};

export default MusicCard;
