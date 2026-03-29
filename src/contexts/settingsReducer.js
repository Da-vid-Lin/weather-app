// Default settings of our website 
export const initialState = {
    units: 'metric',
    view: 'dark',
    depth: 'basic',
    home: null
}

// Stores all the actions inside a dictionary so that it's 
// 1. Easy to see all the ones we have
// 2. Less likely for us to make a typo 
export const SETTINGS = {
    SET_UNITS: 'SET_UNITS',
    SET_VIEW: 'SET_VIEW',
    SET_DEPTH: 'SET_DEPTH',
    SET_HOME: 'SET_HOME',
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
        return {...state, view: action.payload}
    } 

    else if (action.type === SETTINGS.SET_HOME) {
        return {...state, view: action.payload}
    } 

    else {
        return state
    }
}