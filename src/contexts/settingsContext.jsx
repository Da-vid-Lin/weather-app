import { createContext, useContext, useReducer } from 'react'
import { settingsReducer, initialState } from './settingsReducer'

const SettingsContext = createContext(null)

export function SettingsProvider({ children }) {
  	const [state, dispatch] = useReducer(settingsReducer, initialState)
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

