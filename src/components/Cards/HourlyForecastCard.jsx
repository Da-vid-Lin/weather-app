// Displays the hourly forecast for next x - 24 hours 

import { useSettings } from '../../contexts/settingsContext'
import { useWeather } from '../../contexts/weatherContext'
import { formatTime } from '../../utils/formatTime'
import { formatDuration } from '../../utils/formatDuration.js'

export default function HourlyForecastCard({ hourlyData, hourlyLocationData, routeData }){
    const { state } = useSettings()
    const { state:weatherState } = useWeather()

    const locationAName = weatherState.locationA
    const locationBName = weatherState.locationB
    const tempUnit = state.units === 'metric' ? '°C' : '°F'
    const commuteHours = Math.ceil(routeData.duration / 60)

    var originData = []
    var dividerData = []
    var destiData = []

    hourlyData.forEach((hour, index) => {
        if (index === commuteHours){
            dividerData.push(
                <div key={`D${index}`} className="hourly-divider-content">
                    <p className="divider-icon">🧭</p>
                    <p className="divider-label">Weather Change</p>
                    <p className="divider-label">After</p>
                    <p className="divider-time">{formatDuration(routeData.duration)} Cycle Time</p>
                </div>
            )
        }

        if (index < commuteHours){
            originData.push(
                <div key={`A${index}`}>
                    <p>{formatTime(hourlyLocationData[index].time)}</p>
                    <img src={`https://openweathermap.org/img/wn/${hourlyLocationData[index].icon}.png`} />
                    <p>{hourlyLocationData[index].temp.toFixed(0)}{tempUnit}</p>
                    <p>🌧️{(hourlyLocationData[index].chance * 100).toFixed(0)}%</p>
                </div>
            )
        }

        else {
            destiData.push(
                <div key={`B${index}`}>
                    <p>{formatTime(hour.time)}</p>
                    <img src={`https://openweathermap.org/img/wn/${hour.icon}.png`} />
                    <p>{hour.temp.toFixed(0)}{tempUnit}</p>
                    <p>🌧️{(hour.chance*100).toFixed(0)}%</p>
                </div>
            )
        }
        
    })

    return (
    <div className="hourly-forecast">

        <div className="hourly-scroll-row">

            <div className="hourly-section">
                <div className="hourly-cards">
                    {originData}
                </div>
                <div className="hourly-label">{locationAName}</div>
            </div>

            <div className="hourly-section hourly-divider-section">
                <div className="hourly-divider-content">
                    {dividerData}
                </div>
                <div className="hourly-label-divider">→</div>
            </div>

            <div className="hourly-section">
                <div className="hourly-cards">
                    {destiData}
                </div>
                <div className="hourly-label">{locationBName}</div>
            </div>

        </div>

    </div>
)
}
