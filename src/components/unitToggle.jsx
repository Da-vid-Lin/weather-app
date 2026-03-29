// Button for switching between metric and sped units 

import { useSettings } from '../contexts/SettingsContext'
import { setUnits } from '../contexts/settings/settingsActions'

export default function UnitToggle() {
    const { state, dispatch } = useSettings()

    let displayText = ''
    let nextUnit = ''

    if (state.units === 'metric') {
        displayText = '°C'
        nextUnit = 'imperial'
    } else if (state.units === 'imperial') {
        displayText = '°F'
        nextUnit = 'metric'
    }

    return (
        <button onClick={() =>
            setUnits(dispatch, nextUnit)}>
            {displayText}
        </button>
    )
}