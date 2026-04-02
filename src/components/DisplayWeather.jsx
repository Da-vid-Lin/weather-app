// Card that displays a locations weather information
import '../styles/weatherCard.css'
import OverviewCard from './Cards/OverviewCard'
import StatsCard from './Cards/StatsCard'
import WindCard from './Cards/WindCard'
import AirQualityCard from './Cards/AirQualityCard'
import StaticHourlyForecastCard from './Cards/StaticHourlyForecastCard'

export default function DisplayWeather({ weatherData, weatherQuality, locationName, hourlyData }) {
    // Wait for all data before rendering.
    if (!weatherData || !weatherQuality || !locationName) {
        return <div className="location-card">Loading...</div>
    }

    return (
        <div className="location-card">
            <div className="location-card-bg" />

            <div className="location-overlay">
                <OverviewCard weatherData={weatherData} locationName={locationName} />
                <div className="daily-forecast">
                    <StaticHourlyForecastCard hourlyData={hourlyData}/>
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