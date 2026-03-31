// Card that displays a locations weather information
import '../styles/weatherCard.css'
import OverviewCard from './cards/OverviewCard'
import StatsCard from './cards/StatsCard'
import WindCard from './cards/WindCard'
import AirQualityCard from './cards/AirQualityCard'
import CyclingAdvice from './cards/CyclingAdviceCard'

export default function WeatherCard({ weatherData, weatherQuality, locationName }) {
    if (!weatherData || !weatherQuality || !locationName) {
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
                <StatsCard weatherData={weatherData} />
                <div className="stats-row">
                    <WindCard weatherData={weatherData} />
                    <AirQualityCard weatherQuality={weatherQuality} />
                </div>
            </div>
        </div>
    )
}