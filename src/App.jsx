import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavigationBar'

import SelectPage from './pages/SelectPage'
import LocationPage from './pages/LocationPage'
import WeatherPage from './pages/WeatherPage'
import HomePage from './pages/HomePage'
import SettingsPage from './pages/SettingsPage'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/select" element={<SelectPage />} />
                <Route path="/search/:field" element={<LocationPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="/weather" element={<WeatherPage />} />
            </Routes>
            <NavBar />
        </BrowserRouter>
    )
}