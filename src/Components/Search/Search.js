// Search.js
import './search.css'
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchMealCard from '../../Containers/SearchMealCard/SearchMealCard';

// Composant Search
const Search = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  
  const location = useLocation();
  const searchterm = new URLSearchParams(location.search).get('q') || '';

  const navigate = useNavigate();

  const searchMeals = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query} `
        
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setSearchResults(data.meals || []);
    } catch (error) {
      console.error('Error fetching meals:', error);
    }
  };

  const handleSearch = () => {
    // Mettre à jour l'URL avec le paramètre de recherche
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  useEffect(() => {
    // Exécuter la recherche lors du changement du terme de recherche (query)
    searchMeals();
  }, [query]);

  return (
    <div className="search-container">
      <div className='search'>
       
        <input
          type="text"
          name="s"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="input-control"
          autoComplete="off"
          placeholder="Rechercher un repas..."
        />
        <button onClick={handleSearch} type='submit' className='btn'>
          <FontAwesomeIcon icon={["fa-solid", "fa-magnifying-glass"]} />
        </button>
       
      </div>

      {searchterm && (
        <div className="meal-list">
          {searchResults.map((item) => (
            <SearchMealCard key={item.idMeal} meals={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
