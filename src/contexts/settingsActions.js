import { SETTINGS } from './settingsReducer'

export function setUnits(dispatch, units) {
    dispatch({
        type: SETTINGS.SET_UNITS,
        payload: units
    })
}