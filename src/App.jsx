import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import NavBar from './components/NavigationBar'

import SelectPage from './pages/SelectPage'
import LocationPage from './pages/LocationPage'
import WeatherPage from './pages/WeatherPage'
import HomePage from './pages/HomePage'
import SettingsPage from './pages/SettingsPage'

export default function App() {
    const [theme, setTheme] = useState(localStorage.getItem('app-theme') || 'light')
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('app-theme', theme)
    }, [theme])
    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/select" element={<SelectPage />} />
                <Route path="/search/:field" element={<LocationPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/settings" element={<SettingsPage currentTheme={theme} toggleTheme={toggleTheme} />} />
                <Route path="/weather" element={<WeatherPage />} />
            </Routes>
            <NavBar />
        </BrowserRouter>
    )
}