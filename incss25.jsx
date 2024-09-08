import React from 'react';

// Text component with inline styles
const Text = ({ content, color, fontWeight, lineHeight }) => {
    // Inline style object
    const style = {
        color: color || 'black', // Default color is black if not provided
        fontWeight: fontWeight || 'normal', // Default font weight is normal if not provided
        lineHeight: lineHeight || 'normal' // Default line height is normal if not provided
    };

    return <p style={style}>{content}</p>;
};

export default Text;
