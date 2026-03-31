import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/selectLocation.css';
import Plus from '../assets/images/Plus1.png';
import { useWeather } from '../contexts/weatherContext';
import LocationCapsule from './LocationCapsule';
import { useSettings } from '../contexts/settingsContext';

export default function SelectLocation() {
	const { state } = useWeather();
 	const { state: settingsState } = useSettings();

	return (
		<div className="app-wrapper">
			<div className="mobile-container">
				<div className="list-section">
					<h2 className="section-title">Home</h2>
					<div className="action-card">
						<Link to="/search/home" className="icon-circle">
							<img src={Plus} alt="Set Home" />
						</Link>
						<Link to="/" className="card-text">
							{settingsState.home || 'Select a Location'}
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

				{settingsState.recentDestinations.length > 0 && (
					<div className='recents'>
						<h2 className="section-title">Recent Searches</h2>
						{settingsState.recentDestinations.map((city) => (
							<LocationCapsule key={city} city={city} />
						))}
					</div>
				)}

			</div>
		</div>
	);
}