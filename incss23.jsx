// incss23.jsx
import React from 'react';

// Define the Container component
const Container = ({ children, padding = '20px', border = '1px solid black', maxWidth = '1200px' }) => {
    // Inline styles for the Container component
    const containerStyle = {
        padding: padding,
        border: border,
        maxWidth: maxWidth,
        margin: '0 auto' // Centering the container
    };

    return (
        <div style={containerStyle}>
            {children}
        </div>
    );
};

export default Container;
