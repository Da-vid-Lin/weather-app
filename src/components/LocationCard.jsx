// Card that displays a locations weather information
import '../styles/locationCard.css'
import OverviewCard from './Cards/OverviewCard'
import StatsCard from './Cards/StatsCard'
import WindCard from './Cards/WindCard'
import AirQualityCard from './Cards/AirQualityCard'
import CyclingAdvice from './Cards/CyclingAdviceCard'

export default function LocationCard({ weatherData, weatherQuality, locationName }) {
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