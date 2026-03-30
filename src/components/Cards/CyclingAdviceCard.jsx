import { getCyclingScore } from "../../utils/cycleRating"

export default function CyclingAdvice({ weatherData, weatherQuality}){
  const cyclingMessage = getCyclingScore(weatherData, weatherQuality)


  return(
    <div className="cycling-advice-card">
        <h3 className="advice-rating">{cyclingMessage[1]+'%'}</h3>
        <p className="advice-message">{cyclingMessage[0]}</p>
    </div>
  )
}