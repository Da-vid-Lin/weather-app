import { useEffect, useState } from 'react'
import { fetchCurrentWeather } from '../services/weatherApi'
import { fetchAirQuality } from '../services/weatherApi'
import { searchCity } from '../services/geocodingApi'
import { useSettings } from '../contexts/settingsContext'
import DisplayWeather from '../components/DisplayWeather'

export default function HomePage() {
    const { state, dispatch } = useSettings()
        const [currentWeather, setCurrentWeather] = useState(null)
        const [currentQuality, setCurrentQuality] = useState(null)
        const [currentName, setCurrentName] = useState(null)

    // Using api to get cords and weather info
    useEffect(() => {
        if (!state.home) { return }

        async function loadWeather() {
            const cities = await searchCity(state.home)
            console.log('Cities found:', cities)

            const city = cities[0]
            const currentWeather = await fetchCurrentWeather(city.lat, city.lon, state.units)
            console.log('Weather fetched:', currentWeather)

            const currentQuality = await fetchAirQuality(city.lat, city.lon, state.units)
            console.log('Quality fetched:', currentQuality)

            setCurrentWeather(currentWeather)
            setCurrentQuality(currentQuality)
            setCurrentName(city.name)
        }

        loadWeather()
    }, [state.home])

    // Displaying the weather information
    return (
        <div>
            <DisplayWeather weatherData={currentWeather} weatherQuality={currentQuality} locationName={currentName}/>
        </div>
    )
}