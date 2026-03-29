// Card that displays a locations weather information
import '../styles/LocationCard.css'
import WOverviewCard from './WOverviewCard'
import WStatsCard from './WStatsCard'
import WindCard from './WindCard'
import AirQualityCard from './AirQualityCard'

export default function LocationCard({ weatherData, weatherQuality, locationName }) {
    if (!weatherData || !weatherQuality || !locationName) {
        return <div className="location-card">Loading...</div>
    }

    return (
        <div className="location-card">
            <div className="location-card-bg" />

            <div className="location-overlay">
                <WOverviewCard weatherData={weatherData} locationName={locationName} />
                <WStatsCard weatherData={weatherData} />
                <div className="stats-row">
                    <WindCard weatherData={weatherData} />
                    <AirQualityCard weatherQuality={weatherQuality} />
                </div>
            </div>
        </div>
    )
}