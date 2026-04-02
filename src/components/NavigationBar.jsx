// Bottom navigation bar with links to the five main pages

import { Link, useLocation } from 'react-router-dom'
import '../styles/navigationBar.css'
import { useWeather } from '../contexts/weatherContext'
import { useSettings } from '../contexts/settingsContext'

export default function NavBar() {

    const location = useLocation()
    const { state } = useWeather()
    const {state: settingsState} = useSettings();

    // Dont let user move onto weather without a destination Location
    let weatherEndpoint = "/weather"
    if (!state.locationB){
        weatherEndpoint = "/select"
    }

    // Prevent navigation to home without a home location set
    let homeEndpoint = "/"
    if (!settingsState.home){
        homeEndpoint = "/select"
    }
    return (
        // Each nav item directs to an endpoint based on user actions
        <nav className="navbar">
            <Link to="/select" className={`nav-item ${location.pathname === '/select' ? 'nav-active' : ''}`}>
                <span className="nav-icon">📍</span>
                <span className="nav-label">Select</span>
            </Link>
            <Link to={weatherEndpoint} className={`nav-item ${location.pathname === '/weather' ? 'nav-active' : ''}`}>
                <span className="nav-icon">🌤️</span>
                <span className="nav-label">Weather</span>
            </Link>
            <Link to={homeEndpoint} className={`nav-item ${location.pathname === '/' ? 'nav-active' : ''}`}>
                <span className="nav-icon">🏠</span>
                <span className="nav-label">Home</span>
            </Link>
            <Link to="/logs" className={`nav-item ${location.pathname === '/logs' ? 'nav-active' : ''}`}>
                <span className="nav-icon">📄</span>
                <span className="nav-label">Logs</span>
            </Link>
            <Link to="/settings" className={`nav-item ${location.pathname === '/settings' ? 'nav-active' : ''}`}>
                <span className="nav-icon">⚙️</span>
                <span className="nav-label">Settings</span>
            </Link>
        </nav>
    )
}
