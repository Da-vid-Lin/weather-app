// Displays the wind direction information about the location given

import { useSettings } from '../../contexts/settingsContext'
import { getWindDirection } from '../../utils/windDirection'
import '../../styles/detailedCard.css'

export default function WindCard({weatherData}) {
    const { state } = useSettings()
    const windDirection = getWindDirection(weatherData.windDeg)
    const isDetailed = state.depth === 'detailed'
    const windUnit = state.units === 'metric' ? 'km/h' : 'mph'
    const windSpeed = state.units === 'metric' ? (weatherData.windSpeed * 3.6).toFixed(1) : weatherData.windSpeed
    const gustSpeed = state.units === 'metric' ? (weatherData.windGust * 3.6).toFixed(1) : weatherData.windGust

    console.log(weatherData)

    return (
        <div className="stat-tile">
            <span className="stat-label">Wind</span>
            <span className="stat-value">{windSpeed} {windUnit}</span>

            {isDetailed && (
                <div className="stat-detailed">

                    <div className="stat-breakdown">
                        <div className="stat-sub">
                            <span className="stat-sub-label">Gust</span>
                            <span className="stat-sub-value">{gustSpeed} {windUnit}</span>
                        </div>
                        <div className="stat-sub">
                            <span className="stat-sub-label">Degrees</span>
                            <span className="stat-sub-value">{weatherData.windDeg}°</span>
                        </div>
                        <div className="stat-sub">
                            <span className="stat-sub-label">Direction</span>
                            <span className="stat-sub-value">{windDirection}</span>
                        </div>
                    </div>

                    

                </div>
            )}
            
        </div>
    )

    //<div className="compass">
    //    <div className="compass-needle"
    //        style={{ transform: `rotate(${weatherData.windDeg}deg)` }}/>
    //    <span className="compass-label">{windDirection}</span>
    //</div>
}