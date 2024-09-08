// incss22.jsx
import React from 'react';

// Define the Title component
const Title = ({ text = 'Default Title', fontSize = '24px', color = 'black', margin = '10px' }) => {
    // Inline styles for the Title component
    const titleStyle = {
        fontSize: fontSize,
        color: color,
        margin: margin
    };

    return (
        <h1 style={titleStyle}>{text}</h1>
    );
};

export default Title;
