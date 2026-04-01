import SettingsCard from '../components/SettingsCard';

export default function SettingsPage({ currentTheme, toggleTheme }) {
    return (
        <div>
            <SettingsCard currentTheme={currentTheme} toggleTheme={toggleTheme}/>
        </div>
    );
}