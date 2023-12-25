import React, { useState, useEffect } from "react";
import "./home.css";

import CategoryCard from "../CategoryCard/CategoryCard";

const Home = () => {
  const [categoriesHome, setCategoriesHome] = useState([]);

  const fetchHome = async () => {
    try {
      const response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
      const data = await response.json();
      setCategoriesHome(data.categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchHome();
  }, []);

  return (
    <div>
        <h1>Meal Categories</h1>
        <div className="home-containair">
            {categoriesHome.map((item) => (
            <CategoryCard key={item.idCategory} category={item} />
            ))}
        </div>
    </div>
  );
};

export default Home;
