// Card that displays a locations weather information
import '../styles/weatherCard.css'
import OverviewCard from './cards/OverviewCard'
import StatsCard from './cards/StatsCard'
import WindCard from './cards/WindCard'
import AirQualityCard from './cards/AirQualityCard'
import CyclingAdvice from './cards/CyclingAdviceCard'
import HourlyForecastCard from './Cards/HourlyForecastCard'
import DailyForecastCard from './Cards/DailyForecastCard'

export default function WeatherCard({ weatherData, weatherQuality, locationName, hourlyData, dailyData }) {
    if (!weatherData || !weatherQuality || !locationName || !hourlyData || !dailyData) {
        return <div className="location-card">Loading...</div>
    }

    return (
        <div className="location-card">
            <div className="location-card-bg" />

            <div className="location-overlay">
                <OverviewCard weatherData={weatherData} locationName={locationName} />
                <span>---------------------------------------</span>
                <CyclingAdvice weatherData={weatherData} weatherQuality={weatherQuality}/>
                <span>---------------------------------------</span>
                <div className="daily-forecast">
                    <HourlyForecastCard hourlyData={hourlyData}/>
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