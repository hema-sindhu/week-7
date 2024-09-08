import React from 'react';

// PageTitle component with inline styles
const PageTitle = ({ text, backgroundColor, padding, textAlign }) => {
    // Inline style object
    const style = {
        backgroundColor: backgroundColor || 'lightgray', // Default background color is lightgray if not provided
        padding: padding || '10px', // Default padding is 10px if not provided
        textAlign: textAlign || 'center' // Default text alignment is center if not provided
    };

    return (
        <div style={style}>
            <h1>{text}</h1>
        </div>
    );
};

export default PageTitle;
