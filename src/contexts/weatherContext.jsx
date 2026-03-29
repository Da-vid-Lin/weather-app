import { createContext, useContext, useReducer } from 'react'
import { weatherReducer, initialState } from './weatherReducer'

// Creates a global shared storage for all the weather locations 
const WeatherContext = createContext(null)

// Makes the locations available to all "children" wrapped around the <SettingsContext> tag
export function WeatherProvider({ children }) {
    const [state, dispatch] = useReducer(weatherReducer, initialState)
    const value = { state, dispatch }

    return (
        <WeatherContext.Provider value={value}>
            {children}
        </WeatherContext.Provider>
    )
}

// Allows different components to access / use the locations
export function useWeather() {
    const ctx = useContext(WeatherContext)
    if (!ctx) { throw new Error('useWeather must be used inside WeatherProvider') }
    return ctx
}