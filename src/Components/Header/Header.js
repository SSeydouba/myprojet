// Header.js
import React from 'react';
import './header.css';
import mealIcon from "../../assets/meal-icon.png";
import { Link } from 'react-router-dom';
import './icons'; 
import Search from '../Search/Search';
import Nav from '../../Containers/Nav/Nav';

// Composant Header
const Header = () => {
  return (
    <div className='header-container'>   
      <h1>Welcome to TheMealDB</h1>
      
      {/* Inclusion Nav */}
      <Nav />

      <div className='logo'>
        <Link to={"/"} alt="" className='logo-image'>
          <img src={mealIcon} alt='Meal icon'
            className='logos' 
          />
          <img src={mealIcon} alt='Meal icon' 
            className='logos'
          />
        </Link>
      </div>
      <div className='line'>
        <hr/>
        <div className='content-search'>
            {/* Inclusion du formulaire de recherche (composant Search) */}
            <Search />
        </div>
        
        <hr/>
      </div>
    </div>
  );
};

export default Header;
