import { useEffect, useState } from 'react'
import { fetchCurrentWeather } from './services/weatherAPI'
import { fetchAirQuality } from './services/weatherAPI'
import { searchCity } from './services/geocodingAPI'
import { useWeather } from './contexts/weatherContext'
import LocationCard from './components/LocationCard'
import { setLocationA } from './contexts/weatherActions'

export default function App() {

	// Testing location card 
	const { state, dispatch } = useWeather()
	const [currentWeather, setCurrentWeather] = useState(null)
	const [currentQuality, setCurrentQuality] = useState(null)
	const [currentName, setCurrentName] = useState(null)

	useEffect(() => {
		setLocationA(dispatch, 'Barking, London')
	}, [dispatch])

	// Using api to get cords and weather info
	useEffect(() => {
		if (!state.locationA) { return }

		async function loadWeather() {
			const cities = await searchCity(state.locationA)
			console.log('Cities found:', cities)

			const city = cities[0]
			const currentWeather = await fetchCurrentWeather(city.lat, city.lon)
			console.log('Weather fetched:', currentWeather)

			const currentQuality = await fetchAirQuality(city.lat, city.lon)
			console.log('Quality fetched:', currentQuality)

			setCurrentWeather(currentWeather)
			setCurrentQuality(currentQuality)
			setCurrentName(city.name)
		}

		loadWeather()
  	}, [state.locationA])

	// Displaying the weather information
	return (
		<div>
			<LocationCard weatherData={currentWeather} weatherQuality={currentQuality} locationName={currentName}/>
		</div>
	)
}