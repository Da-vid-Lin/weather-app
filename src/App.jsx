import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SettingsPage from './pages/SettingsPage'
import WeatherPage from './pages/WeatherPage'
import Dashboard from './components/Dashboard'
import SearchWeather from './components/SearchWeather'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/search/:field" element={<SearchWeather />} />
                <Route path="/settings" element={<SettingsPage />} />
				<Route path="/weather" element={<WeatherPage />} />
            </Routes>
        </BrowserRouter>
    )
}