import { createContext, useContext, useReducer } from 'react'
import { settingsReducer, initialState } from './settingsReducer'

// Creates a global shared storage for all the settings 
const SettingsContext = createContext(null)

// Takes the settings already stored in localStorage if user has used website before
function loadSettings() {
    const saved = localStorage.getItem('settings')
    if (saved) {return JSON.parse(saved)}
    return initialState
}

// Updates the localStorage everytime there's a new state
function settingsReducerWithStorage(state, action) {
    const newState = settingsReducer(state, action)
    localStorage.setItem('settings', JSON.stringify(newState))
    return newState
}

// Makes the settings available to all "children" wrapped around the <SettingsContext> tag
export function SettingsProvider({ children }) {
  	const [state, dispatch] = useReducer(settingsReducerWithStorage, loadSettings())
  	const value = {state, dispatch}

 	return (
    	<SettingsContext.Provider value={value}>
      		{children}
    	</SettingsContext.Provider>
  	)
}

// Allows different components to access / use the settings via writing
// import { useSettings } from './contexts/settings/SettingsContext'
// const { state, dispatch } = useSettings()
export function useSettings() {
    const ctx = useContext(SettingsContext)
    if (!ctx) {throw new Error('useSettings must be used inside SettingsProvider')}
    return ctx
}

