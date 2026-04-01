// Displays the overview information about the location given

import { useSettings } from '../../contexts/settingsContext'
import { getWindDirection } from '../../utils/windDirection'

export default function OverviewCard({weatherData, locationName, showingLive}) {
    const { state } = useSettings()
    const windDirection = getWindDirection(weatherData.windDeg)
    const windUnit = state.units === 'metric' ? 'km/h' : 'mph'
    const windSpeed = state.units === 'metric' ? (weatherData.windSpeed * 3.6).toFixed(1) : weatherData.windSpeed
    const tempUnit = state.units === 'metric' ? '°C' : '°F'
    //console.log(weatherData.feelsLike)
    return (
        <div className="weather-overview">
            <p className="weather-temp">{Math.round(weatherData.temp)}{tempUnit}</p>
            <p className="weather-feels">Feels like {Math.round(weatherData.feelsLike)}{tempUnit}</p>
            <p className="weather-location">{showingLive ? "📍":"📌"}{locationName}, {weatherData.condition}</p>
            <p className="weather-wind">{windSpeed} {windUnit} from {windDirection}</p>
        </div>
    )
}