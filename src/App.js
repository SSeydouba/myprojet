// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './Containers/Home/Home';
import Meal from './Components/Meal/Meal';
import MealDetails from './Components/MealDetails/MealDetails';
import Search from './Components/Search/Search';
import Header from './Components/Header/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryName" element={<Meal />} />
          <Route path="/meal/:mealName" element={<MealDetails />} />
          <Route path="/search/:searchTerm" element={<Search />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
