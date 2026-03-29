// Displays the detailed information about the location given

export default function WStatsCard({weatherData}) {
    return (
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
                <span className="stat-label">Pressure</span>
                <span className="stat-value">{weatherData.pressure} hPa</span>
            </div>
        </div>
    )
}