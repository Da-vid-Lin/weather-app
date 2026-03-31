// Displays the cycling advice and gear suggestions based on the weather data

import { getCyclingScore } from "../../utils/cyclingScore"
import { getGearSuggest } from "../../utils/gearSuggest"

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
	const gearMessage = getGearSuggest(weatherData)
  	const displayImage = adviceImages[cyclingMessage[0]];

  	return(
            <div className="stat-breakdown">
				<div className="stat-sub">
					<span className="stat-sub-label">Cycling Score</span>
        			<span className="stat-sub-value">{cyclingMessage[1]}%</span>
				</div>
				<div className="stat-sub">
					<span className="stat-sub-label">Advice</span>
        			<span className="stat-sub-value">{cyclingMessage[0]}</span>
				</div>
				<div className="stat-sub">
					<span className="stat-sub-label">Gear</span>
        			<span className="stat-sub-value">{gearMessage}</span>
				</div>
			</div>
  	)
}

//<div className="cycling-advice-card">
    //<img src={displayImage} alt={cyclingMessage[0]} className="cycling-image" />
//</div>