import { getCyclingScore } from "../../utils/cycleRating"
import "../../styles/LocationCard.css";

import perfectBikeImg from '../../assets/ratingIcons/star.png';
import decentBikeImg from '../../assets/ratingIcons/thumbs-up.png';
import badBikeImg from '../../assets/ratingIcons/sad-face.png';
import hazardBikeImg from '../../assets/images/Warning.png';
import stopBikeImg from '../../assets/ratingIcons/no-bike.png';

const adviceImages = {
  'Perfect cycling conditions': perfectBikeImg,
  'Decent cycling conditions': decentBikeImg,
  'Bad cycling conditions': badBikeImg,
  'Hazardous cycling conditions': hazardBikeImg,
  'Not recommended cycling': stopBikeImg
};

export default function CyclingAdvice({ weatherData, weatherQuality}){
  const cyclingMessage = getCyclingScore(weatherData, weatherQuality)
  const displayImage = adviceImages[cyclingMessage[0]];


  return(
    <div className="cycling-advice-card">
        <h3 className="advice-rating">{cyclingMessage[1]+'%'}</h3>
        <img src={displayImage} alt={cyclingMessage[0]} className="cycling-image" />
        <p className="advice-message">{cyclingMessage[0]}</p>
    </div>
  )
}