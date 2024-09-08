import React from 'react';
import PropTypes from 'prop-types';

function DishDetails({ recipeName, ingredients, cookingTime }) {
  return (
    <div className="dish-details">
      <h2>{recipeName}</h2>
      <p>Ingredients: {ingredients.join(', ')}</p>
      <p>Cooking Time: {cookingTime} minutes</p>
    </div>
  );
}

// PropTypes validation
DishDetails.propTypes = {
  recipeName: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  cookingTime: PropTypes.number.isRequired,
};

export default DishDetails;
