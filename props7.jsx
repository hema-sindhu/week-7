// props7.jsx
import React from 'react';

const CourseCard = ({ courseName, instructor, duration }) => {
  // Inline styles
  const cardStyle = {
    backgroundColor: '#f3e5f5',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'left',
    marginBottom: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '300px'
  };

  const courseNameStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px'
  };

  const instructorStyle = {
    fontSize: '16px',
    color: '#6a1b9a',
    marginBottom: '10px'
  };

  const durationStyle = {
    fontSize: '14px',
    color: '#8e24aa'
  };

  return (
    <div style={cardStyle}>
      <div style={courseNameStyle}>{courseName}</div>
      <div style={instructorStyle}>Instructor: {instructor}</div>
      <div style={durationStyle}>Duration: {duration} hours</div>
    </div>
  );
};

export default CourseCard;
