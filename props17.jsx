import React from 'react';
import PropTypes from 'prop-types';

function LearningModule({ courseName, instructor, duration }) {
  return (
    <div>
      <h2>{courseName}</h2>
      <p>Instructor: {instructor}</p>
      <p>Duration: {duration} hours</p>
    </div>
  );
}

LearningModule.propTypes = {
  courseName: PropTypes.string.isRequired,
  instructor: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
};

export default LearningModule;
