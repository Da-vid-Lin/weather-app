import { formatTime } from '../../utils/formatTime'
export default function DailyForecastCard({ dailyData }){
    return(
        <div className="daily-forecast">
            {dailyData.map((day) => (
                <div key={day.date}>
                    <p>{formatTime(day.date)}</p>
                    <p>{day.minTemp}</p>
                    <p>{day.maxTemp}</p>
                    <p>{day.description}</p>
                    <img src={`https://openweathermap.org/img/wn/${day.icon}.png`} />

                </div>

            ))}

        </div>

    )


}