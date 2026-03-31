import { setLocationB } from "../../contexts/weatherActions";
import { useWeather } from "../../contexts/weatherContext";
import { Link } from "react-router-dom";
import '../../styles/Dashboard.css'; 
import '../../styles/LocationCapsule.css';

export default function LocationCapsule({ city }) {
    const { dispatch } = useWeather();

    return (
        <Link 
            to="/weather"
            className="action-card recent-capsule" 
            onClick={() => {
                setLocationB(dispatch, city);
            }}
        >
            <div className="card-text recent-capsule-text">
                {city}
            </div>
        </Link>
    );
}