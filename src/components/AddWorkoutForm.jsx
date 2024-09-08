import React, { useState } from 'react';
import styles from './AddWorkoutForm.module.css'; // Ensure this path is correct

function AddWorkoutForm({ onAddWorkout }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddWorkout({ name, description, image });
    setName('');
    setDescription('');
    setImage('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Workout Name" 
        required 
      />
      <textarea 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        placeholder="Workout Description" 
      />
      <input 
        type="text" 
        value={image} 
        onChange={(e) => setImage(e.target.value)} 
        placeholder="Image URL" 
      />
      <button type="submit">Add Workout</button>
    </form>
  );
}

export default AddWorkoutForm;
