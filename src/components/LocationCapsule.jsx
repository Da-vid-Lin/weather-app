// Clickable capsules showing city name, weather icon and temperature

import { useState, useEffect } from "react";
import { setLocationB } from "../contexts/weatherActions";
import { useWeather } from "../contexts/weatherContext";
import { useSettings } from "../contexts/settingsContext";
import { searchCity } from "../services/geocodingAPI";
import { fetchCurrentWeather } from "../services/weatherAPI";
import { Link } from "react-router-dom";
import '../styles/selectLocation.css'; 
import '../styles/locationCapsule.css';
 
import rainIcon from '../assets/weatherIcons/Rain.png';
import snowIcon from '../assets/weatherIcons/Snow.png';
import thunderIcon from '../assets/weatherIcons/Thunder.png';
import sunIcon from '../assets/weatherIcons/Sun.png';
import cloudIcon from '../assets/weatherIcons/Cloud.png';
import smokeIcon from '../assets/weatherIcons/Smoke.png';
import tornadoIcon from '../assets/weatherIcons/Tornado.png';

// Exhaustive list of what openWeather API list could return as a condition
const conditionToIcon = {
    "Rain": rainIcon,
    "Drizzle": rainIcon,
    "Snow": snowIcon,
    "Thunderstorm": thunderIcon,
    "Clear": sunIcon,
    "Clouds": cloudIcon,
    "Mist": smokeIcon,
    "Fog": smokeIcon,
    "Haze": smokeIcon,
    "Smoke": smokeIcon,
    "Dust": smokeIcon,
    "Sand": smokeIcon,
    "Ash": smokeIcon,
    "Tornado": tornadoIcon,
    "Squall": tornadoIcon,
};

export default function LocationCapsule({ city }) {
    const { dispatch } = useWeather();
    const { state } = useSettings();
    const [weatherIcon, setWeatherIcon] = useState(null);
    const [temp, setTemp] = useState(null);
 
    // Get weather icon and temperature whenever the city or unit changes.
    useEffect(() => {
        async function loadWeatherData() {
            const cities = await searchCity(city);
            if (cities.length === 0) return;
 
            const firstCity = cities[0];
            const weather = await fetchCurrentWeather(firstCity.lat, firstCity.lon, state.units);
 
            let icon = conditionToIcon[weather.condition]

            //Default to cloud if no icon found.
            if (!icon) { icon = cloudIcon }
 
            setWeatherIcon(icon);
            setTemp(Math.round(weather.temp));
        }
 
        loadWeatherData();
    }, [city, state.units]);
 
    const tempUnit = state.units === 'metric' ? '°C' : '°F';
 
    return (
        <Link 
            to="/weather"
            className="action-card recent-capsule" 
            // Set city as destination so weather page can be displayed
            onClick={() => {
                setLocationB(dispatch, city);
            }}
        >
            <div className="capsule-icon-circle">
                {weatherIcon && (
                    <img src={weatherIcon} alt="weather" className="capsule-weather-icon" />
                )}
            </div>
            <div className="card-text recent-capsule-text">
                {city}
            </div>
            {temp !== null && (
                <span className="capsule-temp">
                    {temp}{tempUnit}
                </span>
            )}
        </Link>
    );
}