import { useEffect, useState } from 'react'
import { fetchCurrentWeather } from '../services/weatherApi'
import { fetchAirQuality } from '../services/weatherApi'
import { searchCity } from '../services/geocodingApi'
import { useWeather } from '../contexts/weatherContext'
import { fetchHourlyForecast } from '../services/weatherApi'
import { fetchDailyForecast } from '../services/weatherApi'
import WeatherCard from '../components/WeatherCard'

export default function WeatherPage() {
    const { state, dispatch } = useWeather()
    const [currentWeather, setCurrentWeather] = useState(null)
    const [currentQuality, setCurrentQuality] = useState(null)
    const [currentName, setCurrentName] = useState(null)
    const [currentHourly, setCurrentHourly] = useState(null)
    const [currentDaily, setCurrentDaily] = useState(null)

    // Using api to get cords and weather info
    useEffect(() => {
        if (!state.locationB) { return }

        async function loadWeather() {
            const cities = await searchCity(state.locationB)
            console.log('Cities found:', cities)

            const city = cities[0]
            const currentWeather = await fetchCurrentWeather(city.lat, city.lon, state.units)
            console.log('Weather fetched:', currentWeather)

            const currentQuality = await fetchAirQuality(city.lat, city.lon, state.units)
            console.log('Quality fetched:', currentQuality)

            const currentHourly = await fetchHourlyForecast(city.lat, city.lon)
            console.log('Hourly fetched:', currentHourly)

            const currentDaily = await fetchDailyForecast(city.lat, city.lon)
            console.log('Daily fetched:', currentDaily)

            setCurrentWeather(currentWeather)
            setCurrentQuality(currentQuality)
            setCurrentName(city.name)
            setCurrentHourly(currentHourly)
            setCurrentDaily(currentDaily)
        }

        loadWeather()
    }, [state.locationB])

    // Displaying the weather information
    return (
        <div>
            <WeatherCard weatherData={currentWeather} weatherQuality={currentQuality} locationName={currentName} hourlyData={currentHourly} dailyData={currentDaily}/>
        </div>
    )
}