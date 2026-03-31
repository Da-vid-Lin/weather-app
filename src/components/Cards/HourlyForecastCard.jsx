import { useState, useEffect } from 'react'
import { fetchHourlyForecast } from '../services/weatherAPI'


export default function HourlyForecastCard({ lat, lon, units }){
    const [hourlyData, setHourlyData] = useState([])
    useEffect(() => {
        fetchHourlyForecast(lat, lon, units).then((data) => setHourlyData(data))
    }, [lat, lon, units])

    if(!hourlyData.length){
        return <div>Loading...</div>
    }

    return (
        <div className="hourly-forecast">
            {hourlyData.map((hour) => (
                <div key={hour.time}>
                    <p>{hour.time}</p>
                    <p>{hour.temp}</p>
                    <img src={`https://openweathermap.org/img/wn/${hour.icon}.png`} />
                </div>
                
            ))}
        </div>
    )




}
