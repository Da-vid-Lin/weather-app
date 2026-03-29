// Displays the overview information about the location given
import { getWindDirection } from '../utils/windDirection'

export default function WOverviewCard({weatherData, locationName}) {
    const windDirection = getWindDirection(weatherData.windDeg)

    return (
        <div className="weather-overview">
            <p className="weather-temp">{Math.round(weatherData.temp)}</p>
            <p className="weather-condition">{weatherData.condition}</p>
            <p className="weather-location">{locationName}</p>
            <p className="weather-wind">{weatherData.windSpeed} mph from {windDirection}</p>
        </div>
    )
}