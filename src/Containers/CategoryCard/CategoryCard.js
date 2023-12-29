// CategoryCard.js

import React from "react";
import "./categorycard.css";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  // Appelle de la category de Home
  const categoryDetails = category || {};

  return (
    <div className="category-card" >
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
