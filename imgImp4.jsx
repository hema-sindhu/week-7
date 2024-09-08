// imgImp4.js
import React from 'react';

// Import logos from local assets
import logo1 from './assets/logo1.png';
import logo2 from './assets/logo2.png';
import logo3 from './assets/logo3.png';

const ImgImp4 = () => {
    // Inline styles
    const galleryStyle = {
        display: 'flex',
        justifyContent: 'space-around', // Adjust spacing between logos
        alignItems: 'center', // Center logos vertically
    };

    const logoStyle = {
        width: '100px', // Set logo size
        height: 'auto', // Maintain aspect ratio
        margin: '0 10px', // Optional: Add spacing around logos
    };

    return (
        <div style={galleryStyle}>
            <img src={logo1} alt="Logo 1" style={logoStyle} />
            <img src={logo2} alt="Logo 2" style={logoStyle} />
            <img src={logo3} alt="Logo 3" style={logoStyle} />
        </div>
    );
};

export default ImgImp4;
