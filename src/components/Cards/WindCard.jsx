// Displays the wind direction information about the location given

import { useSettings } from '../../contexts/settingsContext'
import { getWindDirection } from '../../utils/windDirection'
import '../../styles/detailedCard.css'

export default function WindCard({weatherData}) {
    const { state } = useSettings()
    const windDirection = getWindDirection(weatherData.windDeg)
    const isDetailed = state.depth === 'detailed'
    console.log(weatherData)

    return (
        <div className="stat-tile">
            <span className="stat-label">Wind</span>
            <span className="stat-value">{weatherData.windSpeed} mph</span>

            {isDetailed && (
                <div className="stat-detailed">

                    <div className="stat-breakdown">
                        <div className="stat-sub">
                            <span className="stat-sub-label">Gust</span>
                            <span className="stat-sub-value">{weatherData.windGust} mph</span>
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