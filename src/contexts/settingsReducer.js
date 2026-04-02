// Default settings of our website 
export const initialState = {
    units: 'metric',
    view: 'dark',
    depth: 'basic',
    home: null,
    recentDestinations: [],
    logs: [],
    logFlag: false,
}

// Stores all the actions inside a dictionary so that it's 
// 1. Easy to see all the ones we have
// 2. Less likely for us to make a typo 
export const SETTINGS = {
    SET_UNITS: 'SET_UNITS',
    SET_VIEW: 'SET_VIEW',
    SET_DEPTH: 'SET_DEPTH',
    SET_HOME: 'SET_HOME',
    SET_RECENT_DESTINATIONS: 'SET_RECENT_DESTINATIONS',
    SET_LOGS: 'SET_LOGS',
    SET_LOG_FLAG: 'SET_LOG_FLAG'
}

// Allows us to change the state of a setting
export function settingsReducer(state, action) {
    if (action.type === SETTINGS.SET_UNITS) {
        return {...state, units: action.payload}
    } 

    else if (action.type === SETTINGS.SET_VIEW) {
        return {...state, view: action.payload}
    } 

    else if (action.type === SETTINGS.SET_DEPTH) {
        return {...state, depth: action.payload}
    } 

    else if (action.type === SETTINGS.SET_HOME) {
        return {...state, home: action.payload}
    }

    else if (action.type === SETTINGS.SET_RECENT_DESTINATIONS) {
        return {...state, recentDestinations: action.payload}
    }

    else if (action.type === SETTINGS.SET_LOGS) {
        return {...state, logs: action.payload}
    }

    else if (action.type === SETTINGS.SET_LOG_FLAG) {
        return {...state, logFlag: action.payload}
    }

    else {
        return state
    }
}