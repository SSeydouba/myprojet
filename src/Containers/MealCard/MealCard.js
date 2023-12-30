// MealCard.js

import React from "react";
import "./mealcard.css";
import { Link } from "react-router-dom";

const MealCard = ({meal }) => {
  const mealArr = meal || {};

  return (
    <div className="mealcard-container" >
      <div className="meal-card">
        <Link to={`/meal/${mealArr.strMeal}`}>
          <img src={mealArr.strMealThumb || ""} alt={mealArr.strMeal || "Nom du repas non disponible"} 
            className="img-card"
          />
        </Link>
      </div>
      <div className="title">
        <p>{mealArr.strMeal || "Nom du repas non disponible"}</p>
      </div>
    </div>
  );
};

export default MealCard;
