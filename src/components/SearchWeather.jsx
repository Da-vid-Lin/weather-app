import { useState, useEffect } from 'react';
import { searchCity } from '../services/geocodingAPI';
import { fetchCurrentWeather, fetchDailyForecast, fetchHourlyForecast, fetchAirQuality } from '../services/weatherAPI';
import { useWeather } from '../contexts/weatherContext';
import { setLocationA } from '../contexts/weatherActions';



function SearchLocation() {

    const BOUNDS = {
    latMin: 51.28, latMax: 51.69,
    lonMin: -0.51, lonMax: 0.33,
    };

    const isInLondon = (lat, lon) =>{
        return(
        lat >= BOUNDS.latMin && lat <= BOUNDS.latMax &&
        lon >= BOUNDS.lonMin && lon <= BOUNDS.lonMax);
    }


    const { state, dispatch } = useWeather()
    const [destination, setDestination] = useState('');



    const submit = async (e) => {
        e.preventDefault();
        const Area1 = await searchCity(state.locationA);
        const Area2 = await searchCity(destination);

        if (Area1.length === 0 || Area2.length === 0) {
            console.log("Location not found");
            return;
        }else if (!isInLondon(Area1[0].lat, Area1[0].lon) || !isInLondon(Area2[0].lat, Area2[0].lon)) {
            console.log("London Locations only");
            return;
        }else{
            console.log("Both locations are in London");
        }
    }

    useEffect(() => {
        setLocationA(dispatch, 'Barking, London')
    }, [dispatch]);

    return (
    <div className="search-page-container">
        <h2>Search</h2>

        <form onSubmit={submit}>
        <div className="input-group">
            <input
            id="home-input"
            type="text"
            placeholder="Enter home location"
            value={state.locationA || ''}
            onChange={(e) => setLocationA(dispatch, e.target.value)}
            />
        </div>

        <div className="input-group">
            <input
            id="dest-input"
            type="text"
            placeholder="Enter destination..."
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            />
        </div>

        <button type="submit">Search</button>
        </form>
    </div>
    );
}

export default SearchLocation;