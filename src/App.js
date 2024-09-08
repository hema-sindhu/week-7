// src/App.jsx
import React, { useState } from 'react';
import WorkoutList from './components/WorkoutList';
import AddWorkoutForm from './components/AddWorkoutForm';
import ProgressTracker from './components/ProgressTracker';
import './App.css';

function App() {
  const [workouts, setWorkouts] = useState([]);
  const [progress, setProgress] = useState(0);

  const handleAddWorkout = (workout) => {
    setWorkouts([...workouts, { id: workouts.length + 1, ...workout }]);
  };

  return (
    <div className="App">
      <h1>Fitness Tracker</h1>
      <AddWorkoutForm onAddWorkout={handleAddWorkout} />
      <WorkoutList workouts={workouts} />
      <ProgressTracker progress={progress} />
    </div>
  );
}

export default App;
