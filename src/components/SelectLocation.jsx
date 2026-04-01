import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/selectLocation.css';
import Plus from '../assets/images/Plus1.png';
import { useWeather } from '../contexts/weatherContext';
import LocationCapsule from './LocationCapsule';
import { useSettings } from '../contexts/settingsContext';
 
export default function SelectLocation() {
	const { state } = useWeather();
	// Rename to not overlap with state above
	const { state: settingsState } = useSettings();
	const navigate = useNavigate();
 
	return (
		<div className="page-container select-page">
			<div className="list-section">
				<h2 className="section-title">Home</h2>
				<div className="action-card" onClick={() => { if (settingsState.home) navigate('/'); }}>
					{/** stopPropagation so that it doesnt climb to action card div */}
					<Link to="/search/home" className="icon-circle" onClick={(e) => e.stopPropagation()}>
						<img src={Plus} alt="Set Home" />
					</Link>
					<div className="card-text">
						{settingsState.home || 'Select a Location'}
					</div>
				</div>
			</div>
 
			<div className="list-section">
				<h2 className="section-title">Destination</h2>
				<div className="action-card" onClick={() => navigate('/weather')}>
					{/** stopPropagation so that it doesnt climb to action card div */}
					<Link to="/search/dest" className="icon-circle" onClick={(e) => e.stopPropagation()}>
						<img src={Plus} alt="Set Destination" />
					</Link>
					<div className="card-text">
						{state.locationB || 'Select a Location'}
					</div>
				</div>
			</div>
 
			{settingsState.recentDestinations.length > 0 && (
				<div className='recents'>
					<h2 className="section-title">Recent Searches</h2>
					{settingsState.recentDestinations.map((city) => (
						<LocationCapsule key={city} city={city} />
					))}
				</div>
			)}
		</div>
	);
}