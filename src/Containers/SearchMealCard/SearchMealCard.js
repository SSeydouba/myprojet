// Importations
import './searchMealCard.css';
import React from 'react';
// import { Link } from 'react-router-dom';

// Composant SearchMealCard
const SearchMealCard = ({ meals }) => {
  return (
    <div className="movie-card">
      {/* <Link to={`/search/${encodeURIComponent(meals.id)}`} className="meals-details-link"> */}
        <img
          src={`${meals.strMealThumb}`}
          className="cardImg"
          alt={meals.strMeal}
        />
      {/* </Link> */}
      <div>{meals.strMeal}</div>
    </div>
  );
};

export default SearchMealCard;
