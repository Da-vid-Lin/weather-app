// Card that displays a locations weather information
import '../styles/weatherCard.css'
import OverviewCard from './Cards/OverviewCard'
import StatsCard from './Cards/StatsCard'
import WindCard from './Cards/WindCard'
import AirQualityCard from './Cards/AirQualityCard'
import CyclingAdvice from './Cards/CyclingAdviceCard'
import HourlyForecastCard from './Cards/HourlyForecastCard'
import DailyForecastCard from './Cards/DailyForecastCard'

export default function WeatherCard({ weatherData, weatherQuality, locationName, 
    hourlyData, hourlyLocationData, routeData, dailyData, toggleButton }) {
    if (!weatherData || !weatherQuality || !locationName || !hourlyData || !dailyData
        || !hourlyLocationData || !routeData
    ) {
        return <div className="location-card">Loading...</div>
    }

    return (
        <div className="location-card">
            <div className="location-card-bg" />

            <div className="location-overlay">
                <OverviewCard weatherData={weatherData} locationName={locationName} />
                {toggleButton}
                <hr className="divider" />
                <CyclingAdvice weatherData={weatherData} weatherQuality={weatherQuality}/>
                <hr className="divider" />
                <div className="hourly-forecast">
                    <HourlyForecastCard hourlyData={hourlyData} hourlyLocationData={hourlyLocationData} 
                    routeData={routeData}/>
                </div>
               <div className="daily-forecast">
                    <DailyForecastCard dailyData={dailyData}/>
               </div>
                <StatsCard weatherData={weatherData} />
                <div className="stats-row">
                    <WindCard weatherData={weatherData} />
                    <AirQualityCard weatherQuality={weatherQuality} />
                </div>
            </div>
        </div>
    )
}