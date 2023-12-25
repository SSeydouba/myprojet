// MealCard.js

import React from "react";
import "./mealcard.css";
import { Link } from "react-router-dom";

const MealCard = ({meal }) => {
  const mealArr = meal || {};
 


  const handleClick = () => {
    // Rediriger vers la page des détails du repas en utilisant le nom du repas
    window.location.href = `/meal/${mealArr.strMeal}`;
  };

  return (
    <div className="meal-card" onClick={handleClick}>
      <Link to={`/meal/${mealArr.strMeal}`}>
        <img src={mealArr .strMealThumb || ""} alt={mealArr.strMeal || "Nom du repas non disponible"} />
      </Link>
      <h2>{mealArr.strMeal || "Nom du repas non disponible"}</h2>
      <p>{mealArr.strInstructions || "Instructions non disponibles"}</p>
    </div>
  );
};

export default MealCard;
