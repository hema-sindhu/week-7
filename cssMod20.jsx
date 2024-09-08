import React from 'react';

// Inline styles
const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  fontSize: '14px',
  color: '#007bff', // Blue color for breadcrumb text
};

const itemStyle = {
  marginRight: '8px', // Space between breadcrumb items
};

const separatorStyle = {
  marginRight: '8px',
  color: '#6c757d', // Gray color for separator
};

const Breadcrumb = ({ items }) => {
  return (
    <nav>
      <div style={containerStyle}>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <span style={itemStyle}>{item}</span>
            {index < items.length - 1 && <span style={separatorStyle}>/</span>}
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
};

export default Breadcrumb;
