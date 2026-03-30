import {getGearSuggest} from "../../utils/gearSuggest"

export default function GearSuggestCard({weatherData}){
  const gearMessage = getGearSuggest(weatherData)

  return(
    <div className="gear-card">
        <p className="gear-message">{gearMessage}</p>
    </div>
  )
}