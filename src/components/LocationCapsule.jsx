import { setLocationB } from "../contexts/weatherActions";
import { useWeather } from "../contexts/weatherContext";
import { Link } from "react-router-dom";
import '../styles/selectLocation.css'; 
import '../styles/locationCapsule.css';

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