import { formatTime } from '../../utils/formatTime'
export default function HourlyForecastCard({ hourlyData }){
    return (
        <div className="hourly-forecast">
            {hourlyData.map((hour) => (
                <div key={hour.time}>
                    <p>{formatTime(hour.time)}</p>
                    <p>{hour.temp.toFixed(0)}</p>
                    <p>{hour.chance}</p>
                    <img src={`https://openweathermap.org/img/wn/${hour.icon}.png`} />
                </div>
                
            ))}
        </div>
    )




}
