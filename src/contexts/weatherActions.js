import { WEATHER } from './weatherReducer'

// Functions to allow us to run e.g. setUnits(dispatch, 'imperial')
// Rather than having to write dispatch({type: 'SET_UNITS',payload: 'imperial'})
// Makes re-using these much easier to type 

export function setLocationA(dispatch, location) {
    dispatch({ 
        type: WEATHER.SET_LOCATION_A, 
        payload: location 
    })
}

export function setLocationB(dispatch, location) {
    dispatch({ 
        type: WEATHER.SET_LOCATION_B, 
        payload: location 
    })
}