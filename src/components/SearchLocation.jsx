import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { searchCity } from '../services/geocodingAPI';
import { useWeather } from '../contexts/weatherContext';
import { setLocationA, setLocationB } from '../contexts/weatherActions';
import { setHome } from '../contexts/settingsActions';
import '../styles/searchLocation.css';
import { useSettings } from '../contexts/settingsContext';
import { setRecentDestinations } from '../contexts/settingsActions';
import { setLogFlag } from '../contexts/settingsActions'
 
export default function SearchLocation() {
	const { dispatch } = useWeather();
	const [query, setQuery] = useState('');
	const [results, setResults] = useState([]);
	const { field } = useParams();
	const { state: settingsState, dispatch: settingsDispatch } = useSettings();
 
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
 
 
	useEffect(() => {
		if (query.length == 0 || !query) return;
 
		const search = async () => {
 
			const queryTrimmed = query.trim();
 
			if (queryTrimmed.length >= 2) {
				const allResults = await searchCity(queryTrimmed);
				const londonResults = allResults.filter(loc => isInLondon(loc.lat, loc.lon));
 
 
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
 
		search();
 
 
	}, [query]);
 
 
 
 
	return (
		<div className="page-container search-page">
			<div className="top-nav">
				<Link to="/select" className="back-btn">
					&#8592;
				</Link>
			</div>
 
			<form className="search-input-wrapper" onSubmit={(e) => e.preventDefault()}>
				<input
					type="text"
					placeholder="Search..."
					value={query}
					onChange={(e) => {
						setQuery(e.target.value);
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
						to={field === 'home' ? '/' : '/weather'}
						className="result-item"
						onClick={() => {
							if (field === 'home') {
								setHome(settingsDispatch, loc.name);
							} else {
								setLocationB(dispatch, loc.name);
								// We pass copy to prevent accidentally mutating the state  
								setRecentDestinations(settingsDispatch, loc.name, [...settingsState.recentDestinations]);
								setLogFlag(settingsDispatch, true)
							}
						}}
					>
						{loc.name}, London
					</Link>
				))}
			</div>
		</div>
	);
}