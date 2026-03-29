// Displays the air quality info about the location given

import { useSettings } from '../../contexts/settingsContext'
import '../../styles/detailedCard.css'

export default function AirQualityCard({weatherQuality}) {
    const { state } = useSettings()
    const isDetailed = state.depth === 'detailed'

    return (
        <div className="stat-tile">
            <span className="stat-label">Air Pollution</span>
            <span className="stat-value">{weatherQuality.aqiLabel}</span>

            {isDetailed && (
                <div className="stat-detailed">

                    <div className="stat-breakdown">
                        <div className="stat-sub">
                            <span className="stat-sub-label">PM2.5</span>
                            <span className="stat-sub-value">{weatherQuality.pm2_5} μg/m³</span>
                        </div>
                        <div className="stat-sub">
                            <span className="stat-sub-label">NO₂</span>
                            <span className="stat-sub-value">{weatherQuality.no2} μg/m³</span>
                        </div>
                        <div className="stat-sub">
                            <span className="stat-sub-label">O₃</span>
                            <span className="stat-sub-value">{weatherQuality.o3} μg/m³</span>
                        </div>
                    </div>

                </div>
            )}
        </div>
    )
}