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

    var hoursData = []

    hourlyData.forEach((hour, index) => {
        if (index === commuteHours){
            hoursData.push(
                <div key={`D${index}`} className="hourly-divider">
                    <div className="divider-line" />
                    <div className="divider-pill">
                        <p className="divider-name">{locationAName}</p>
                        <p className="divider-time">{formatDuration(routeData.duration)} </p>
                        <p className="divider-name">{locationBName}</p>
                    </div>
                    <div className="divider-line" />
                </div>
            )
        }

        if (index < commuteHours){
            hoursData.push(
                <div key={`A${index}`}>
                    <p>{formatTime(hourlyLocationData[index].time)}</p>
                    <img src={`https://openweathermap.org/img/wn/${hourlyLocationData[index].icon}.png`} />
                    <p>{hourlyLocationData[index].temp.toFixed(2)}{tempUnit}</p>
                    <p>🌧️{(hourlyLocationData[index].chance * 100).toFixed(0)}%</p>
                </div>
            )
        }

        else {
            hoursData.push(
                <div key={`B${index}`}>
                    <p>{formatTime(hour.time)}</p>
                    <img src={`https://openweathermap.org/img/wn/${hour.icon}.png`} />
                    <p>{hour.temp.toFixed(2)}{tempUnit}</p>
                    <p>🌧️{(hour.chance*100).toFixed(0)}%</p>
                </div>
            )
        }
        
    })

    return (
        <div className="hourly-forecast">
            {hoursData}
        </div>
    )
}
