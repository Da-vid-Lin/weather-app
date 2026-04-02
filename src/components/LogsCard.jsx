import { useState } from 'react'
import { useSettings } from '../contexts/settingsContext'
import { formatDuration } from '../utils/formatDuration'
import '../styles/logsPage.css'

export default function LogsCard() {
    const { state } = useSettings()
    const [showStats, setShowStats] = useState(false)

    const distUnit = state.units === 'metric' ? 'km' : 'miles'

    const recentLogs = state.logs.slice(0, 12)

    // Lifetime stats calculated from the full logs array
    const totalRides = state.logs.length

    const totalDistanceKm = state.logs.reduce((sum, log) => sum + parseFloat(log.distance/1000), 0)
    const avgDistanceKm = totalRides === 0 ? 0 : totalDistanceKm / totalRides
    const totalDistance = distUnit === "km" ? totalDistanceKm : totalDistanceKm * 0.621371
    const avgDistance = distUnit === "km" ? avgDistanceKm : avgDistanceKm * 0.621371


    const totalDuration = state.logs.reduce((sum, log) => sum + log.duration, 0)
    const avgDuration = totalRides === 0 ? 0 : totalDuration / totalRides

    return (
        <div className="page-container logs-page">
            <h1>Journey Logs</h1>

            {recentLogs.length === 0 && (
                <p className="logs-empty">No journeys logged yet. Head to the weather page to log your first ride!</p>
            )}

            <div className="logs-list">
                {recentLogs.map((log, index) => (
                    <div key={index} className="log-card">
                        <div className="log-route">
                            <span className="log-location">{log.locationAName}</span>
                            <span className="log-arrow">→</span>
                            <span className="log-location">{log.locationBName}</span>
                        </div>
                        <div className="log-details">
                            <span className="log-stat">Distance: {distUnit === "km" ? (log.distance/1000).toFixed(2): (log.distance/1000 * 0.621371).toFixed(2)} {distUnit}</span>
                            <span className="log-stat">Time: {formatDuration(log.duration)}</span>
                        </div>
                    </div>
                ))}
            </div>

            {totalRides > 0 && (
                <button className="stats-toggle-btn" onClick={() => setShowStats(prev => !prev)}>
                    {showStats ? 'Hide Lifetime Stats' : 'Show Lifetime Stats'}
                </button>
            )}

            {showStats && (
                <div className="lifetime-stats">
                    <div className="stats-card">
                        <span className="stats-label">Total Rides</span>
                        <span className="stats-value">{totalRides}</span>
                    </div>
                    <div className="stats-card">
                        <span className="stats-label">Total Distance</span>
                        <span className="stats-value">{totalDistance.toFixed(2)} {distUnit}</span>
                    </div>
                    <div className="stats-card">
                        <span className="stats-label">Total Time</span>
                        <span className="stats-value">{formatDuration(Math.round(totalDuration))}</span>
                    </div>
                    <div className="stats-card">
                        <span className="stats-label">Avg Distance</span>
                        <span className="stats-value">{avgDistance.toFixed(2)} {distUnit}</span>
                    </div>
                    <div className="stats-card">
                        <span className="stats-label">Avg Time</span>
                        <span className="stats-value">{formatDuration(Math.round(avgDuration))}</span>
                    </div>
                </div>
            )}
        </div>
    )
}