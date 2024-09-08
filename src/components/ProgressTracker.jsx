// src/components/ProgressTracker.jsx
import React from 'react';

function ProgressTracker({ progress }) {
  const progressStyle = {
    width: `${progress}%`,
    backgroundColor: 'green',
    color: 'white',
    textAlign: 'center'
  };

  return (
    <div style={{ border: '1px solid black', width: '100%' }}>
      <div style={progressStyle}>{progress}%</div>
    </div>
  );
}

export default ProgressTracker;
