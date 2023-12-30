import './searchMealCard.css';
import React from 'react';
// import { Link } from 'react-router-dom';

// Composant SearchMealCard
const SearchMealCard = ({ meals }) => {
  return (
    <div className="search-conatainer">
        <div className='img-meals'>
          {/* <Link to={`/search/${encodeURIComponent(meals.id)}`} className="meals-details-link"> */}
          <img
            src={`${meals.strMealThumb}`}
            alt={meals.strMeal}
            className="cardImg"
          />
        </div>
        {/* </Link> */}
        <p className='title'>
          {meals.strMeal}
        </p>
    </div>
  );
};

export default SearchMealCard;
