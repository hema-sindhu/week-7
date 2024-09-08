import React from 'react';
import PropTypes from 'prop-types';
import styles from './WorkoutCard.module.css'; // Ensure this path is correct

function WorkoutCard({ workout }) {
  return (
    <div className={styles.card}>
      <img src={workout.image} alt={workout.name} />
      <h3>{workout.name}</h3>
      <p>{workout.description}</p>
    </div>
  );
}

WorkoutCard.propTypes = {
  workout: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string
  }).isRequired
};

export default WorkoutCard;
