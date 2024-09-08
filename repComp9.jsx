// src/repComp9.jsx
import React from 'react';

// Define the Song component to display individual song details
const Song = ({ title, artist }) => {
    return (
        <div className="song">
            <h3>{title}</h3>
            <p>{artist}</p>
        </div>
    );
};

// Define the Playlist component to display a list of songs
export const Playlist = ({ songs }) => {
    return (
        <div className="playlist">
            {songs.map(song => (
                <Song key={song.id} title={song.title} artist={song.artist} />
            ))}
        </div>
    );
};
