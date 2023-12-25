//App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './Containers/Home/Home';
import Meal from './Components/Meal/Meal';
import MealDetails from './Components/MealDetails/MealDetails';
// import Search from './Containers/Search/Search';
// import Header from './Components/Header/Header';
// import Footer from './Components/Footer/Footer';


function App() {
  return (
    <Router>
      <div className="App">

        {/* <Header /> */}

        {/* Utilisez Routes au lieu de Route */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryName" element={<Meal />} />
          <Route path="/meal/:mealName" element={<MealDetails />} />

          {/* <Route path="/search" element={<Search />} />*/}
        </Routes>

        {/* Ajoutez vos composants Header et Footer ici */}
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
