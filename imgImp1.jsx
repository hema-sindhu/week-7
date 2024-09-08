// src/imgImp1.jsx
import React from 'react';

const Banner = ({ src }) => {
    return (
        <div>
            <img src={src} alt="Banner" style={{ width: '100%', height: 'auto' }} />
        </div>
    );
};

export default Banner;
