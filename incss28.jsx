// incss28.jsx
import React from 'react';

const Section = () => {
  // Inline styles
  const sectionStyle = {
    margin: '20px',
    padding: '15px',
    border: '2px solid #333'
  };

  return (
    <section style={sectionStyle}>
      <h1>Section Title</h1>
      <p>This is a section with inline styles for margin, padding, and border.</p>
    </section>
  );
};

export default Section;
