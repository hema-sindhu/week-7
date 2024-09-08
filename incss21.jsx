// incss21.jsx
import React from 'react';

// Define the Box component
const Box = ({ width = '100px', height = '100px', backgroundColor = 'blue' }) => {
    // Inline styles for the Box component
    const boxStyle = {
        width: width,
        height: height,
        backgroundColor: backgroundColor
    };

    return (
        <div style={boxStyle}></div>
    );
};

export default Box;
