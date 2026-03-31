import { formatDate } from '../../utils/formatDate'
export default function DailyForecastCard({ dailyData }){
    return(
        <div className="daily-forecast">
            {dailyData.map((day) => (
                <div key={day.date}>
                    <p>{formatDate(day.date)}</p>
                    <img src={`https://openweathermap.org/img/wn/${day.icon}.png`} />
                    <p>{((day.minTemp + day.maxTemp)/2).toFixed(0)}</p>
                    <p>{day.chance}</p>
                    
                </div>

            ))}

        </div>

    )


}