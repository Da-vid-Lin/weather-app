// Displays the daily forecast for next 7 days 

import { useSettings } from '../../contexts/settingsContext'
import { formatDate } from '../../utils/formatDate'

export default function DailyForecastCard({ dailyData }){
    const { state } = useSettings()
    const tempUnit = state.units === 'metric' ? '°C' : '°F'

    return(
        <div className="daily-forecast">
            {dailyData.map((day) => (
                <div key={day.date}>
                    <p>{formatDate(day.date)}</p>
                    <img src={`https://openweathermap.org/img/wn/${day.icon}.png`} />
                    <p>{day.temp.toFixed(0)}{tempUnit}</p>
                    <p>🌧️{(day.chance*100).toFixed(0)}%</p>
                    
                </div>

            ))}

        </div>

    )


}