
export default function HourlyForecastCard({ hourlyData }){
    return (
        <div className="hourly-forecast">
            {hourlyData.map((hour) => (
                <div key={hour.time}>
                    <p>{hour.time}</p>
                    <p>{hour.temp}</p>
                    <p>{hour.precipitation}</p>
                    <img src={`https://openweathermap.org/img/wn/${hour.icon}.png`} />
                </div>
                
            ))}
        </div>
    )




}
