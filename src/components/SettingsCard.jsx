import { useSettings } from '../contexts/settingsContext';
import  UnitToggle  from './toggles/UnitToggle'
import  DepthToggle  from './toggles/DepthToggle'
import  ViewToggle  from './toggles/ViewToggle'
import '../styles/Settings.css'

export default function SettingsCard() {
    const { state, dispatch } = useSettings();

    return (
        <div className="main-settings">
            <h1>Settings</h1>
            <UnitToggle />
            <DepthToggle />
            <ViewToggle />
        </div>
    )
}