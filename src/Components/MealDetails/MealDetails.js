// MealDetails.js

import React, { useState, useEffect } from "react";
import "./mealDetails.css";
import { useParams } from "react-router-dom";
import MealCard from "../../Containers/MealCard/MealCard";

const MealDetails = () => {
  const { mealName } = useParams();
  const [thisMeal, setThisMeal] = useState(null);

  
    const fetchMealDetails = async () => {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`);
        const data = await response.json();
        setThisMeal(data.meals ? data.meals[0] : null);
      } catch (error) {
        console.error("Erreur lors de la récupération des détails du repas :", error);
      }
    };
	
	useEffect(() => {
    fetchMealDetails();
  }, [mealName]);

  // Si les détails du repas sont en cours de chargement
  if (thisMeal === null) {
    return <p>Chargement des données...</p>;
  }

  // Afficher les détails du repas
  return (
    <div>
        {thisMeal ? (
            <div className="movie-content">
                <div className="card-title">
                    <h1>{thisMeal.strMeal}</h1>
                </div>
                <MealCard key={thisMeal.idMeal} meal={thisMeal} />
            </div>
            ) : (
                <p>Aucun repas trouvé</p>
            )}
    </div>

  );
};


export default MealDetails;
