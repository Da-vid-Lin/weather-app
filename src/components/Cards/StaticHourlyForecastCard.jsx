// Displays the hourly forecast for next x - 24 hours 

import { useSettings } from '../../contexts/settingsContext'
import { formatTime } from '../../utils/formatTime'

export default function HourlyForecastCard({ hourlyData }){
    const { state } = useSettings()

    const tempUnit = state.units === 'metric' ? '°C' : '°F'

    return (
        <div className="daily-forecast">
            {hourlyData.map((hour) => (
                <div key={hour.time}>
                    <p>{formatTime(hour.time)}</p>
                    <img src={`https://openweathermap.org/img/wn/${hour.icon}.png`} />
                    <p>{hour.temp.toFixed(0)}{tempUnit}</p>
                    <p>🌧️{(hour.chance*100).toFixed(0)}%</p>
                    
                </div>
                
            ))}
        </div>
    )
}
