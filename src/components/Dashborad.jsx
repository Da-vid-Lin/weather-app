import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Dashboard.css';
import Plus from '../assets/images/Plus1.png';
import SearchImg from '../assets/images/Search.png';
import { useWeather } from '../contexts/weatherContext';

export default function Dashboard() {
  const { state } = useWeather();

  return (
    <div className="app-wrapper">
      <div className="mobile-container">
        

        <button className="search-button">
          <img src={SearchImg} alt="Search" />
        </button>


        <div className="list-section">
          <h2 className="section-title">Home</h2>
          <Link to="/search/home" className="action-card">
            <div className="icon-circle">
              <img src={Plus} alt="Add Home" />
            </div>
            <span className="card-text">
              {state.locationA || 'Select a Location'}
            </span>
          </Link>
        </div>


        <div className="list-section">
          <h2 className="section-title">Destination</h2>
          <Link to="/search/dest" className="action-card">
            <div className="icon-circle">
              <img src={Plus} alt="Add Destination" />
            </div>
            <span className="card-text">
              {state.locationB || 'Select a Location'}
            </span>
          </Link>
        </div>

      </div>
    </div>
  );
}
