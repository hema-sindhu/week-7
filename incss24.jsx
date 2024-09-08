// incss24.jsx
import React from 'react';

// Define the Button component
const Button = ({ children, backgroundColor = 'blue', fontSize = '16px', margin = '10px', onClick }) => {
    // Inline styles for the Button component
    const buttonStyle = {
        backgroundColor: backgroundColor,
        fontSize: fontSize,
        margin: margin,
        color: 'white', // Text color for better contrast
        border: 'none', // Remove default border
        padding: '10px 20px', // Add some padding for better appearance
        cursor: 'pointer', // Change cursor to pointer on hover
        borderRadius: '4px' // Rounded corners
    };

    return (
        <button style={buttonStyle} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
