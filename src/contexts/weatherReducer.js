// Default states of our weather locations 
export const initialState = {
    locationA: null,
    locationB: null, 
}

// Stores weather locations inside a dictionary
export const WEATHER = {
    SET_LOCATION_A: 'SET_LOCATION_A',
    SET_LOCATION_B: 'SET_LOCATION_B',
}

// Allows us to change the state of the weather location
export function weatherReducer(state, action) {
    if (action.type === WEATHER.SET_LOCATION_A) {
        return {...state, locationA: action.payload}
    } 

    else if (action.type === WEATHER.SET_LOCATION_B) {
        return {...state, locationB: action.payload}
    } 
    
    else {
        return state
    }
}