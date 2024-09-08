// props5.jsx
import React from 'react';

const RecipeCard = ({ recipeName, ingredients, cookingTime }) => {
  // Inline styles
  const cardStyle = {
    backgroundColor: '#ffe0b2',
    padding: '20px',
    borderRadius: '10px',
    marginBottom: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
  };

  const recipeNameStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px'
  };

  const ingredientsStyle = {
    fontSize: '16px',
    color: '#6d4c41',
    marginBottom: '10px'
  };

  const timeStyle = {
    fontSize: '14px',
    color: '#8d6e63'
  };

  return (
    <div style={cardStyle}>
      <div style={recipeNameStyle}>{recipeName}</div>
      <div style={ingredientsStyle}>Ingredients: {ingredients.join(', ')}</div>
      <div style={timeStyle}>Cooking Time: {cookingTime} mins</div>
    </div>
  );
};

export default RecipeCard;
