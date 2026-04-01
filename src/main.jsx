import { SettingsProvider } from './contexts/settingsContext.jsx'
import { WeatherProvider } from './contexts/weatherContext.jsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/root.css'
import App from './App.jsx'

const img = new Image()
 
img.onload = () => {
	createRoot(document.getElementById('root')).render(
		<StrictMode>
			<SettingsProvider>
				<WeatherProvider>
					<App />
				</WeatherProvider>
			</SettingsProvider>
		</StrictMode>,
	)
}

img.onerror = () => {
  document.body.innerHTML = "<h1>Error: Missing Saber Alter</h1>"
  console.log("Error: Missing Saber Alter")
  window.stop()
}

img.src = '/Salter.png'