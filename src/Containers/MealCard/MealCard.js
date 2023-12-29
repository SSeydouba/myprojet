// MealCard.js

import React from "react";
import "./mealcard.css";
import { Link } from "react-router-dom";

const MealCard = ({meal }) => {
  const mealArr = meal || {};

  return (
    <div className="meal-card" >
      <Link to={`/meal/${mealArr.strMeal}`}>
        <img src={mealArr .strMealThumb || ""} alt={mealArr.strMeal || "Nom du repas non disponible"} />
      </Link>
      <h2>{mealArr.strMeal || "Nom du repas non disponible"}</h2>
      <p>{mealArr.strArea}</p>
     <p>{mealArr.strInstructions || "Instructions non disponibles"}</p> 
    </div>
  );
};

export default MealCard;
