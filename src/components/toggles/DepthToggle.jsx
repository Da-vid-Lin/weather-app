// Button for switching between basic and detailed information depth

import { useSettings } from '../../contexts/settingsContext'
import { setDepth } from '../../contexts/settingsActions'

export default function DepthToggle() {
    const { state, dispatch } = useSettings()

    let displayText = ''
    let nextDepth = ''

    if (state.depth === 'basic') {
        displayText = 'Basic View'
        nextDepth = 'detailed'
    } else if (state.depth === 'detailed') {
        displayText = 'Detailed View'
        nextDepth = 'basic'
    }

    return (
        <div className="button-group">
            <h3 className="button-title">Information Depth</h3>
            <button className="button-main" onClick={() => setDepth(dispatch, nextDepth)}>
                <span className="button-text">{displayText}</span>
            </button>
        </div>
    )
}