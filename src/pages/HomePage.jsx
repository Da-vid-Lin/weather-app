// Display weather for user's saved home location
// Redirects to select page if no home set
import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { fetchCurrentWeather } from '../services/weatherAPI'
import { fetchAirQuality } from '../services/weatherAPI'
import { searchCity } from '../services/geocodingAPI'
import { useSettings } from '../contexts/settingsContext'
import { fetchHourlyForecast } from '../services/weatherAPI'
import DisplayWeather from '../components/DisplayWeather'

export default function HomePage() {
    const { state, dispatch } = useSettings()
        const [currentWeather, setCurrentWeather] = useState(null)
        const [currentQuality, setCurrentQuality] = useState(null)
        const [currentName, setCurrentName] = useState(null)
        const [currentHourly, setCurrentHourly] = useState(null)

    // Redirect to select page if no home location is set
    useEffect(() => {
        if (!state.home) { return }

        async function loadWeather() {
            const cities = await searchCity(state.home)
            //console.log('Cities found:', cities)

            const city = cities[0]
            const currentWeather = await fetchCurrentWeather(city.lat, city.lon, state.units)
            //console.log('Weather fetched:', currentWeather)

            const currentQuality = await fetchAirQuality(city.lat, city.lon, state.units)
            //console.log('Quality fetched:', currentQuality)

            const currentHourly = await fetchHourlyForecast(city.lat, city.lon, state.units)
            //console.log('Hourly fetched:', currentHourly)

            setCurrentWeather(currentWeather)
            setCurrentQuality(currentQuality)
            setCurrentName(city.name)
            setCurrentHourly(currentHourly)
        }

        loadWeather()
    }, [state.home])

    // Redirect user on start if home location not found
    if (!state.home) {
        return <Navigate to="/select" replace />
    }

    // Displaying the weather information
    return (
        <div>
            <DisplayWeather weatherData={currentWeather} weatherQuality={currentQuality} locationName={currentName} hourlyData={currentHourly}/>
        </div>
    )
}