import React from 'react';
import { useSettings } from '../contexts/settingsContext';
import { setUnits, setView, setDepth } from '../contexts/settingsActions';

export default function SettingsCard() {
    const { state, dispatch } = useSettings();

    return (
        <div className="app-wrapper">
        <div className="mobile-container search-page-layout">
        <div className="list-section">

            <div>
                <h1 Settings></h1>
            </div>
            
            {/* Units Toggle */}
            <div>
                <h3 className="section-title">Measurement Units</h3>
                <button 
                    className="action-card"
                    onClick={() => setUnits(dispatch, state.units === 'metric' ? 'imperial' : 'metric')}
                >
                    <span className="card-text">
                        {state.units === 'metric' ? 'Metric (°C, km/h)' : 'Imperial (°F, mph)'}
                    </span>
                </button>
            </div>

            {/* View/Theme Toggle */}
            <div>
                <h3 className="section-title">App Theme</h3>
                <button
                    className="action-card"
                    onClick={() => setView(dispatch, state.view === 'dark' ? 'light' : 'dark')}
                >   
                    <span className="card-text">
                        {state.view === 'dark' ? 'Dark Mode' : 'Light Mode'}
                    </span> 
                </button>                    
            </div>

            {/* Detail Depth Toggle */}
            <div>
                <h3 className="section-title">Information Depth</h3>
                <button
                    className="action-card"
                    onClick={() => setDepth(dispatch, state.depth === 'basic' ? 'detailed' : 'basic')}
                >
                    <span className="card-text">
                        {state.depth === 'basic' ? 'Basic View' : 'Detailed View'}
                    </span>
                </button>    
            </div>

        </div>
        </div>
        </div>
    )
}