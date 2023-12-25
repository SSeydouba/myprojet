// CategoryCard.js

import React from "react";
import "./categorycard.css";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const categoryDetails = category || {};

  const handleClick = () => {
    // Rediriger vers la page des détails de la catégorie en utilisant le nom de la catégorie
    window.location.href = `/category/${categoryDetails.strCategory}`;
  };

  return (
    <div className="category-card" onClick={handleClick}>
      <div className="category-img">
        <Link to={`/category/${categoryDetails.strCategory}`}>
          <img
            src={categoryDetails.strCategoryThumb}
            alt={categoryDetails.strCategory}
            className="images-category"
          />
        </Link>
        <h3>{categoryDetails.strCategory}</h3>
      </div>
    </div>
  );
};

export default CategoryCard;
