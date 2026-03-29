import { SETTINGS } from './settingsReducer'

// Functions to allow us to run e.g. setUnits(dispatch, 'imperial')
// Rather than having to write dispatch({type: 'SET_UNITS',payload: 'imperial'})
// Makes re-using these much easier to type 

export function setUnits(dispatch, units) {
    dispatch({
        type: SETTINGS.SET_UNITS,
        payload: units
    })
}

export function setView(dispatch, view) {
    dispatch({ 
        type: SETTINGS.SET_VIEW, 
        payload: view 
    })
}

export function setDepth(dispatch, infoDepth) {
    dispatch({ 
        type: SETTINGS.SET_DEPTH, 
        payload: infoDepth 
    })
}

export function setHome(dispatch, home) {
    dispatch({ 
        type: SETTINGS.SET_HOME, 
        payload: home 
    })
}