import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Dashboard.css';
import Plus from '../assets/images/Plus1.png';
import SearchImg from '../assets/images/Search.png';
import { useWeather } from '../contexts/weatherContext';
import LocationCapsule from './Cards/LocationCapsule';

export default function Dashboard() {
  const { state } = useWeather();

  return (
    <div className="app-wrapper">
      <div className="mobile-container">
        <div className="list-section">
          <h2 className="section-title">Home</h2>
          <div className="action-card">
            <Link to="/search/home" className="icon-circle">
              <img src={Plus} alt="Set Home" />
            </Link>
            <Link to="/weather" className="card-text">
              {state.locationA || 'Select a Location'}
            </Link>
          </div>
        </div>

        <div className="list-section">
          <h2 className="section-title">Destination</h2>
          <div className="action-card">
            <Link to="/search/dest" className="icon-circle">
              <img src={Plus} alt="Set Destination" />
            </Link>
            <Link to="/weather" className="card-text">
              {state.locationB || 'Select a Location'}
            </Link>
          </div>
        </div>

        {

        
        <div className='recents'>
          <h2 className="section-title">Recent Searches</h2>
          <LocationCapsule city="Stratford"/>
          <LocationCapsule city="Bow"/>
          <LocationCapsule city="Bromley"/>
        </div>
        
        }

      </div>
    </div>
  );
}