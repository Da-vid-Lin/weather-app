import { useEffect } from 'react'
import { fetchCurrentWeather } from './services/weatherAPI'

export default function App() {

	useEffect(() => {
    fetchCurrentWeather(51.5073219, -0.1276474)
      	.then(data => console.log('Weather data:', data))
      	.catch(err => console.error('Error fetching weather:', err))
  	}, [])


	return (
		<h1>My React App</h1>
	)
}