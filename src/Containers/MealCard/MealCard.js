// MealCard.js

import React from "react";
import "./mealcard.css";
import { Link } from "react-router-dom";

const MealCard = ({category, meal }) => {
  const mealDetails = meal || {};
 


  const handleClick = () => {
    // Rediriger vers la page des détails du repas en utilisant le nom du repas
    window.location.href = `/meal/${mealDetails.strMeal}`;
  };

  return (
    <div className="meal-card" onClick={handleClick}>
      <Link to={`/meal/${mealDetails.strMeal}`}>
        <img src={mealDetails.strMealThumb || ""} alt={mealDetails.strMeal || "Nom du repas non disponible"} />
      </Link>
      <h2>{mealDetails.strMeal || "Nom du repas non disponible"}</h2>
      <p>{mealDetails.strInstructions || "Instructions non disponibles"}</p>
    </div>
  );
};

export default MealCard;
