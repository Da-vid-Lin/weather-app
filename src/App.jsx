import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SettingsPage from './pages/SettingsPage'
import WeatherPage from './pages/WeatherPage'
import SelectLocation from './components/SelectLocation'
import SearchLocation from './components/SearchLocation'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SelectLocation />} />
                <Route path="/search/:field" element={<SearchLocation />} />
                <Route path="/settings" element={<SettingsPage />} />
				<Route path="/weather" element={<WeatherPage />} />
            </Routes>
        </BrowserRouter>
    )
}