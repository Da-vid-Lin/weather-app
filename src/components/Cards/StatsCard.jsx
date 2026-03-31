// Displays the detailed information about the location given

import { useSettings } from '../../contexts/settingsContext'

export default function StatsCard({weatherData}) {
    const { state } = useSettings()

    const visibilityUnit = state.units === 'metric' ? 'km' : 'miles'
    const visNum = weatherData.visibility
    const visibilityDist = state.units === 'metric' ? (visNum / 1000).toFixed(1) : (visNum / 1609).toFixed(1)

    const precipitationUnit = state.units === 'metric' ? 'mm' : 'inches'
    const preNum = weatherData.precipitation
    const precipitationHeight = state.units === 'metric' ? preNum : (preNum / 25.4).toFixed(1)

    return (
        <div className="weather-stats">
            <div className="stat-tile">
                <span className="stat-label">Humidity</span>
                <span className="stat-value">{weatherData.humidity}%</span>
            </div>
            <div className="stat-tile">
                <span className="stat-label">Precipitation</span>
                <span className="stat-value">{precipitationHeight} {precipitationUnit}</span>
            </div>
            <div className="stat-tile">
                <span className="stat-label">Visibility</span>
                <span className="stat-value">{visibilityDist} {visibilityUnit}</span>
            </div>
            <div className="stat-tile">
                <span className="stat-label">Pressure</span>
                <span className="stat-value">{weatherData.pressure} hPa</span>
            </div>
        </div>
    )
}