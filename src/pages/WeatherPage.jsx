import { useEffect, useState } from 'react'
import { fetchCurrentWeather } from '../services/weatherAPI'
import { fetchAirQuality } from '../services/weatherAPI'
import { searchCity } from '../services/geocodingAPI'
import { fetchRouteData } from '../services/routingAPI'
import { useWeather } from '../contexts/weatherContext'
import { useSettings } from '../contexts/settingsContext'
import { fetchHourlyForecast } from '../services/weatherAPI'
import { fetchDailyForecast } from '../services/weatherAPI'
import { useGeoLocation } from '../hooks/useGeoLocation'
import WeatherCard from '../components/WeatherCard'
import { Navigate } from 'react-router-dom'
import { addLog, setLogFlag } from '../contexts/settingsActions'

export default function WeatherPage() {
    const { state, dispatch } = useWeather()
    const { state: settingsState, dispatch: settingsDispatch } = useSettings();
    const [currentWeather, setCurrentWeather] = useState(null)
    const [currentQuality, setCurrentQuality] = useState(null)
    const [currentName, setCurrentName] = useState(null)
    const [currentHourly, setCurrentHourly] = useState(null)
    const [currentHourly2, setCurrentHourly2] = useState(null)
    const [currentRoute, setCurrentRoute] = useState(null)
    const [currentDaily, setCurrentDaily] = useState(null)
    const [showingLive, setShowingLive] = useState(true)

    // Gets live location every 5 minutes
    useGeoLocation(dispatch)

    // Using api to get cords and weather info
    useEffect(() => {
        if (!state.locationA) { return }
        if (!state.locationAC) { return }
        if (!state.locationB) { return }

        async function loadWeather() {
            const cities = await searchCity(showingLive ? state.locationA : state.locationB)
            //console.log('Cities found:', cities)

            const city = cities[0]
            const currentWeather = await fetchCurrentWeather(city.lat, city.lon, settingsState.units)
            //console.log('Weather fetched:', currentWeather)

            const liveLocation = state.locationAC
            const dest = await searchCity(state.locationB)
            const destLocation = dest[0]

            const currentQuality = await fetchAirQuality(city.lat, city.lon, settingsState.units)
            //console.log('Quality fetched:', currentQuality)

            const currentHourly = await fetchHourlyForecast(destLocation.lat, destLocation.lon, settingsState.units)
            const currentHourly2 = await fetchHourlyForecast(liveLocation.lat, liveLocation.lon, settingsState.units)
            //console.log('Hourly fetched:', currentHourly)

            const currentRoute = await fetchRouteData(liveLocation.lat, liveLocation.lon, destLocation.lat, destLocation.lon)
            //console.log('Route fetched:', currentRoute)

            const currentDaily = await fetchDailyForecast(city.lat, city.lon, settingsState.units)
            //console.log('Daily fetched:', currentDaily)

            setCurrentWeather(currentWeather)
            setCurrentQuality(currentQuality)
            setCurrentName(city.name)
            setCurrentHourly(currentHourly)
            setCurrentHourly2(currentHourly2)
            setCurrentRoute(currentRoute)
            setCurrentDaily(currentDaily)

            // Save the journey log once everytime destination is selected
            if (settingsState.logFlag === true) {
                addLog(settingsDispatch, {
                    locationAName: state.locationA,
                    locationBName: state.locationB,
                    distance: currentRoute.distance,
                    duration: currentRoute.duration
                    }, [...settingsState.logs]    
                )
                setLogFlag(settingsDispatch, false)
            }
        }

        loadWeather()
    }, [state.locationB, state.locationA, showingLive])

    // If location B not selected send user back to select
    if (!state.locationB){
        return <Navigate to="/select" replace/> // Replace does not register /weather as a browser entry
    }

    // Displaying the weather information
    return (
        <div>
            <WeatherCard weatherData={currentWeather} weatherQuality={currentQuality} locationName={currentName} 
            hourlyData={currentHourly} hourlyLocationData={currentHourly2} 
            routeData={currentRoute} dailyData={currentDaily}
            toggleButton={
                <button className="location-toggle-btn" onClick={() => setShowingLive(prev => !prev)}>
                    {showingLive ? `Show ${state.locationB} ↓` : `Show ${state.locationA} ↑`}
                </button>
            }/>
        </div>
    )
}