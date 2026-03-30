// Card that displays a locations weather information
import '../styles/locationCard.css'
import WOverviewCard from './Cards/WOverviewCard'
import WStatsCard from './Cards/WStatsCard'
import WindCard from './Cards/WindCard'
import AirQualityCard from './Cards/AirQualityCard'
import CyclingAdvice from './Cards/CyclingAdviceCard'
import GearSuggestCard from './Cards/GearSuggestCard'

export default function LocationCard({ weatherData, weatherQuality, locationName }) {
    if (!weatherData || !weatherQuality || !locationName) {
        return <div className="location-card">Loading...</div>
    }

    return (
        <div className="location-card">
            <div className="location-card-bg" />

            <div className="location-overlay">
                <WOverviewCard weatherData={weatherData} locationName={locationName} />
                <CyclingAdvice weatherData={weatherData} weatherQuality={weatherQuality}/>
                <GearSuggestCard weatherData={weatherData}/>
                <WStatsCard weatherData={weatherData} />
                <div className="stats-row">
                    <WindCard weatherData={weatherData} />
                    <AirQualityCard weatherQuality={weatherQuality} />
                </div>
            </div>
        </div>
    )
}