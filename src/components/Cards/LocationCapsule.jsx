import { setLocationB } from "../../contexts/weatherActions";
import { useWeather } from "../../contexts/weatherContext";
import { Link } from "react-router-dom";
import '../styles/LocationCapsule.css';


export default function LocationCapsule({city}){
    const { dispatch } = useWeather();

    return (
        <div className="capsule">
          <h2 className="capsule-city">{city}</h2>
          <div className="capsule-linker">
            <Link 
            to="/weather"
            className="card-text" 
            onClick={() => {
                setLocationB(dispatch, city);
            }}>
              {city}
            </Link>
          </div>
        </div>


    );
}

