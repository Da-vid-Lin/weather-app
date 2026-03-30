import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { searchCity } from '../services/geocodingAPI';
import { useWeather } from '../contexts/weatherContext';
import { setLocationA, setLocationB } from '../contexts/weatherActions';
import '../styles/SearchWeather.css';

export default function SearchWeather() {
  const { dispatch } = useWeather();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const { field } = useParams();

  // London bounding
  const BOUNDS = {
    latMin: 51.28, latMax: 51.69,
    lonMin: -0.51, lonMax: 0.33,
  };

  const isInLondon = (lat, lon) => {
    return (
      lat >= BOUNDS.latMin && lat <= BOUNDS.latMax &&
      lon >= BOUNDS.lonMin && lon <= BOUNDS.lonMax
    );
  };

  // Triggered when the user hits Enter or clicks the search icon
  const search = async (e) => {
    e.preventDefault(); 

    const queryTrimmed = query.trim();


    if (queryTrimmed.length >= 2) {
      

      const allResults = await searchCity(queryTrimmed);
      const londonResults = allResults.filter(loc => isInLondon(loc.lat, loc.lon));
      
      // Eliminate any duplicates
      const uniqueLocations = [];
      const seenNames = new Set(); 

      for (const location of londonResults) {
        if (!seenNames.has(location.name)) {
          seenNames.add(location.name); 
          uniqueLocations.push(location); 
        }
      }

      setResults(uniqueLocations);

    } else {
      setResults([]); 
    }
  };



  return (
    <div className="app-wrapper">
      <div className="mobile-container search-page-layout">
        <div className="top-nav">
          <Link to="/" className="back-btn">
            &#8592;
          </Link>
        </div>


        <form className="search-input-wrapper" onSubmit={search}>
          <input 
            type="text" 
            placeholder="Search..." 
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              // Clear results if the user deletes their query
              if (e.target.value === '') setResults([]);
            }}
            autoFocus
          />
          <button type="submit" className="search-icon-btn">
            &#128269; 
          </button>
        </form>


        <div className="results-list">
          {results.map((loc, index) => (
            <Link 
              key={index}
              to="/"
              className="result-item"
              onClick={() => {
                if (field === 'home') {
                  setLocationA(dispatch, loc.name);
                } else {
                  setLocationB(dispatch, loc.name);
                }
              }}
            >
              {loc.name}, London
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}