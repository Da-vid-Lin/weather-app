// Button for switching between metric and sped units 

import { useSettings } from '../../contexts/settingsContext'
import { setUnits } from '../../contexts/settingsActions'

export default function UnitToggle() {
    const { state, dispatch } = useSettings()

    let displayText = ''
    let nextUnit = ''

    if (state.units === 'metric') {
        displayText = '°C & km/h'
        nextUnit = 'imperial'
    } else if (state.units === 'imperial') {
        displayText = '°F & mph'
        nextUnit = 'metric'
    }

    return (
        <div className="button-group">
            <h3 className="button-title">Measurement Units</h3>
            <button className="button-main" onClick={() =>
                setUnits(dispatch, nextUnit)}>
                <span className="button-text">{displayText}</span>
            </button>
        </div>
    )
}