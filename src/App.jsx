import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SearchPage from './pages/SearchPage'
import SettingsPage from './pages/SettingsPage'
import WeatherPage from './pages/WeatherPage'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/settings" element={<SettingsPage />} />
				<Route path="/weather" element={<WeatherPage />} />
            </Routes>
        </BrowserRouter>
    )
}