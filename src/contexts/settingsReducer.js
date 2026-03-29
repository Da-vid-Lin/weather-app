export const initialState = {
    units: 'metric'
}

export const SETTINGS = {
    SET_UNITS: 'SET_UNITS'
}

export function settingsReducer(state, action) {
    if (action.type === SETTINGS.SET_UNITS) {
        return {...state, units: action.payload}
    } else {
        return state
    }
}