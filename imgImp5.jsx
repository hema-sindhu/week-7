// imgImp5.jsx
import React from 'react';

// Import artwork images from local assets
import artwork1 from './assets/artwork1.jpg';
import artwork2 from './assets/artwork2.jpg';
import artwork3 from './assets/artwork3.jpg';

const ArtworkGallery = () => {
    // Inline styles for the gallery container
    const galleryStyle = {
        display: 'flex',
        justifyContent: 'space-around', // Adjust spacing between artworks
        alignItems: 'center', // Center artworks vertically
        flexWrap: 'wrap', // Allow wrapping if needed
        gap: '20px', // Space between items
    };

    // Inline styles for each artwork item
    const itemStyle = {
        textAlign: 'center', // Center text below artwork
    };

    const imageStyle = {
        width: '200px', // Set image width
        height: 'auto', // Maintain aspect ratio
        display: 'block',
        margin: '0 auto', // Center image
    };

    return (
        <div style={galleryStyle}>
            <div style={itemStyle}>
                <img src={artwork1} alt="Artwork 1" style={imageStyle} />
                <h3>Artwork Title 1</h3>
                <p>Description for artwork 1. This is a brief description of the first piece.</p>
            </div>
            <div style={itemStyle}>
                <img src={artwork2} alt="Artwork 2" style={imageStyle} />
                <h3>Artwork Title 2</h3>
                <p>Description for artwork 2. This is a brief description of the second piece.</p>
            </div>
            <div style={itemStyle}>
                <img src={artwork3} alt="Artwork 3" style={imageStyle} />
                <h3>Artwork Title 3</h3>
                <p>Description for artwork 3. This is a brief description of the third piece.</p>
            </div>
        </div>
    );
};

export default ArtworkGallery;
