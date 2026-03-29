import { createContext, useContext, useReducer } from 'react'
import { settingsReducer, initialState } from './settingsReducer'

const SettingsContext = createContext(null)

function loadSettings() {
    const saved = localStorage.getItem('settings')
    if (saved) {return JSON.parse(saved)}
    return initialState
}

function settingsReducerWithStorage(state, action) {
    const newState = settingsReducer(state, action)
    localStorage.setItem('settings', JSON.stringify(newState))
    return newState
}

export function SettingsProvider({ children }) {
  	const [state, dispatch] = useReducer(settingsReducerWithStorage, loadSettings())
  	const value = {state, dispatch}

 	return (
    	<SettingsContext.Provider value={value}>
      		{children}
    	</SettingsContext.Provider>
  	)
}

export function useSettings() {
    const ctx = useContext(SettingsContext)
    if (!ctx) {throw new Error('useSettings must be used inside SettingsProvider')}
    return ctx
}

