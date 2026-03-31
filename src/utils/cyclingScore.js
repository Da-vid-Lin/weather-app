// Takes weatherData and returns how favourable weatherData conditions are for cyclists
// e.g. 0-100 where higher score = higher risk
// scoring: wind range from 0-24, rain range from 0-24, visibility 0-24, temparature 0-20, pollution 0-8
// rating [0-20 Perfect cycling conditions], [21-40 Decent cycling conditions], 
// [41-60 Bad cycling conditions], [61-80 Hazardous cycling conditions], [81-100 Not recommended cycling]

export function getCyclingScore(weatherData,airQuality){
    let rainscore = 0
    let windscore = 0
    let visibilityscore = 0
    let pollutionscore = 0
    let tempscore = 0
    
    // weatherData condition scoring
    if (["Thunderstorm","Ash","Tornado","Squall"].includes(weatherData.condition)){
        return ['Not recommended cycling', 100]
    }

    // Drizzle and rain + precipitation for rain scoring
    if(weatherData.condition === 'Drizzle'){
        rainscore += 6
    }
    else if(weatherData.condition === 'Rain' && weatherData.precipitation <= 2){
        rainscore += 12
    }
    else if(weatherData.condition === 'Rain' && weatherData.precipitation <= 5){
        rainscore += 18
    }
    else if(weatherData.condition === 'Rain' && weatherData.precipitation > 5){
        rainscore += 24
    }

    // Windspeed for wind scoring
    if(weatherData.windSpeed <= 10){
        windscore += 0
    }
    else if(weatherData.windSpeed <= 20){
        windscore += 8
    }
    else if(weatherData.windSpeed <= 30){
        windscore += 16
    }
    else if(weatherData.windSpeed > 30){
        windscore += 24
    }

    // Visibility for visibility scoring
    if(weatherData.visibility >=  5000){
        visibilityscore += 0
    }
    else if(weatherData.visibility >= 2000){
        visibilityscore += 8
    }
    else if(weatherData.visibility >= 1000){
        visibilityscore += 16
    }
    else if(weatherData.visibility < 1000){
        visibilityscore += 24
    }

    // Aqi level for pollution scoring
    if(airQuality.aqiLabel === 'Low'){
        pollutionscore += 2
    }
    else if(airQuality.aqiLabel === 'Fair'){
        pollutionscore += 4
    }
    else if(airQuality.aqiLabel === 'Moderate'){
        pollutionscore += 6
    }
    else if(airQuality.aqiLabel === 'High' || airQuality.aqiLabel === 'Very High'){
        pollutionscore += 8
    }

    // Temperature for temp scoring
    if(weatherData.temp >= 27){
        tempscore += 14
    }
    else if(weatherData.temp >= 15){
        tempscore += 0
    }
    else if(weatherData.temp >= 5){
        tempscore += 6
    }
    else if(weatherData.temp >= 0){
        tempscore += 14
    }
    else if(weatherData.temp < 0){
        tempscore += 20
    }

    const total = windscore + rainscore + visibilityscore + pollutionscore + tempscore

    if(["Snow","Fog","Smoke","Haze"].includes(weatherData.condition)){
        return ['Hazardous cycling conditions', total]
    }

    // Returns corresponding message score
    if(total <= 20){
        return ['Perfect conditions', total]
    }
    else if(total <= 40){
        return ['Decent conditions', total]
    }
    else if(total <= 60){
        return ['Bad conditions', total]
    }
    else if(total <= 80){
        return ['Hazardous conditions', total]
    }
    else {
        return [`Don't cycle today`, total]
    }
}