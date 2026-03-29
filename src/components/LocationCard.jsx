// Card that displays a locations weather information
import '../styles/LocationCard.css'
import { getWindDirection } from '../utils/windDirection'

export default function LocationCard({ weatherData, weatherQuality, locationName }) {
    if (!weatherData) {
        return <div className="location-card">Loading...</div>
    }

    const windDirection = getWindDirection(weatherData.windDeg)

    return (
        <div className="location-card">
            <div className="location-card-bg" />

            <div className="location-overlay">

                <p className="weather-temp">{Math.round(weatherData.temp)}</p>
                <p className="weather-condition">{weatherData.condition}</p>
                <p className="weather-location">{locationName}</p>
                <p className="weather-wind">{weatherData.windSpeed} mph from {windDirection}</p>

                <div className="weather-stats">
                    <div className="stat-tile">
                        <span className="stat-label">Humidity</span>
                        <span className="stat-value">{weatherData.humidity}%</span>
                    </div>
                    <div className="stat-tile">
                        <span className="stat-label">Precipitation</span>
                        <span className="stat-value">{weatherData.precipitation} mm</span>
                    </div>
                    <div className="stat-tile">
                        <span className="stat-label">Visibility</span>
                        <span className="stat-value">{(weatherData.visibility / 1000).toFixed(1)} km</span>
                    </div>
                    <div className="stat-tile">
                        <span className="stat-label">Air Pollution</span>
                        <span className="stat-value">{weatherQuality.aqiLabel}</span>
                    </div>
                </div>

            </div>
        </div>
    )
}