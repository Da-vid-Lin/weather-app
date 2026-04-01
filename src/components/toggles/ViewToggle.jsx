// Button for switching between light and dark view

import { useSettings } from '../../contexts/settingsContext'
import { setView } from '../../contexts/settingsActions'

export default function ViewToggle({ currentTheme, toggleTheme }) {
    const { state, dispatch } = useSettings()
    const handleToggle = () => {
        toggleTheme()
        const nextView = currentTheme === 'dark' ? 'light' : 'dark'
        setView(dispatch, nextView)
    }
    const displayText = currentTheme === 'dark' ? 'Light Mode' : 'Dark Mode';

    return (
        <div className="button-group">
            <h3 className="button-title">App Theme</h3>
            <button className="button-main" onClick={handleToggle}>
                <span className="button-text">{displayText}</span>
            </button>
        </div>
    )
}