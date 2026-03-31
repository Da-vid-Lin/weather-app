// Button for switching between light and dark view

import { useSettings } from '../../contexts/settingsContext'
import { setView } from '../../contexts/settingsActions'

export default function ViewToggle() {
    const { state, dispatch } = useSettings()

    let displayText = ''
    let nextView = ''

    if (state.view === 'dark') {
        displayText = 'Dark Mode'
        nextView = 'light'
    } else if (state.view === 'light') {
        displayText = 'Light Mode'
        nextView = 'dark'
    }

    return (
        <div className="button-group">
            <h3 className="button-title">App Theme</h3>
            <button className="button-main" onClick={() => setView(dispatch, nextView)}>
                <span className="button-text">{displayText}</span>
            </button>
        </div>
    )
}