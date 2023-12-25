import React, { useState, useEffect } from "react";
import "./meal.css";
import { useParams } from "react-router-dom";
import MealCard from "../../Containers/MealCard/MealCard";

const Meal = () => {
  const { categoryName } = useParams();
  const [categoryMeals, setCategoryMeals] = useState([]);
  
  const [thisMeal, setThisMeal] = useState(null);

  useEffect(() => {
    const fetchCategoryMeals = async () => {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`);
        const data = await response.json();
        setCategoryMeals(data.meals || []);
      } catch (error) {
        console.error("Erreur lors de la récupération des repas de la catégorie :", error);
      }
    };

    fetchCategoryMeals();
  }, [categoryName]);

  // Si les repas de la catégorie sont en cours de chargement
  if (categoryMeals.length === 0) {
    return <p>Chargement des données...</p>;
  }

  // Afficher la liste des repas de la catégorie
  return (
    <div>
      <h1>Repas de la catégorie {categoryName}</h1>
      <div className="meal-container">
        {categoryMeals.map((meal) => (
          <MealCard key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default Meal;
