// Bottom navigation bar with links to the four main pages

import { Link, useLocation } from 'react-router-dom'
import '../styles/navigationBar.css'
import { useWeather } from '../contexts/weatherContext'

export default function NavBar() {

    const location = useLocation()
    const { state } = useWeather()

    // Dont let user move onto weather without a destination Location
    let weatherEndpoint = "/weather"
    if (!state.locationB){
        weatherEndpoint = "/select"
    }

    return (
        <nav className="navbar">
            <Link to="/select" className={`nav-item ${location.pathname === '/select' ? 'nav-active' : ''}`}>
                <span className="nav-icon">📍</span>
                <span className="nav-label">Select</span>
            </Link>
            <Link to={weatherEndpoint} className={`nav-item ${location.pathname === '/weather' ? 'nav-active' : ''}`}>
                <span className="nav-icon">🌤️</span>
                <span className="nav-label">Weather</span>
            </Link>
            <Link to="/" className={`nav-item ${location.pathname === '/' ? 'nav-active' : ''}`}>
                <span className="nav-icon">🏠</span>
                <span className="nav-label">Home</span>
            </Link>
            <Link to="/settings" className={`nav-item ${location.pathname === '/settings' ? 'nav-active' : ''}`}>
                <span className="nav-icon">⚙️</span>
                <span className="nav-label">Settings</span>
            </Link>
        </nav>
    )
}