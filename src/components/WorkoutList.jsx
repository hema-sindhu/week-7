// src/components/WorkoutList.jsx
import React from 'react';
import WorkoutCard from './WorkoutCard';

function WorkoutList({ workouts }) {
  return (
    <div>
      {workouts.map(workout => (
        <WorkoutCard key={workout.id} workout={workout} />
      ))}
    </div>
  );
}

export default WorkoutList;
