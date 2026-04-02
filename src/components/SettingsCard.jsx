// Layout for the settings page, contains toggles for units, info and darkmode
import { useSettings } from '../contexts/settingsContext';
import  UnitToggle  from './toggles/UnitToggle'
import  DepthToggle  from './toggles/DepthToggle'
import  ViewToggle  from './toggles/ViewToggle'
import '../styles/settings.css'

export default function SettingsCard({ currentTheme, toggleTheme }) {
    const { state, dispatch } = useSettings();

    return (
        <div className="page-container settings-page">
            <h1>Settings</h1>
            <UnitToggle />
            <DepthToggle />
            <ViewToggle currentTheme={currentTheme} toggleTheme={toggleTheme}/>
        </div>
    )
}