// Rates how favourable weatherData condition are for cyclists
// e.g. 0-50 higher score = higher risk
// scoring: wind range from 0-12, rain range from 0-12, visibility 0-12, temparature 0-10,  pollution 0-4
// rating 0-10Perfect cycling conditions,11-20 decent cycling conditions, 
// 21-30bad cycling conditions, 31-40hazardous cycling conditions, 41-50 Not recommended cycling

export function getCyclingScore(weatherData,airQuality){
    let windscore = 0
    let rainscore = 0
    let visibilityscore = 0
    let pollutionscore = 0
    let tempscore = 0
    let total = 0
    
    // weatherData condition scoring
    if (weatherData.condition === 'Thunderstorm' || weatherData.condition === 'Ash' || weatherData.condition === 'Tornado' || weatherData.condition === 'Squall'){
        return 'Not recommended cycling'
    }
    if(weatherData.condition === 'Snow' || weatherData.condition === 'Fog' || weatherData.condition === 'Smoke' || weatherData.condition === 'Haze'){
        return 'Hazardous cycling conditions'
    }

    // drizzle and rain + precipitation for rainscore 
    if(weatherData.condition === 'Rain' && weatherData.precipitation < 2){
        rainscore += 5
    }
    if(weatherData.condition === 'Rain' && weatherData.precipitation >= 2 && weatherData.precipitation <= 5){
        rainscore += 8
    }
    if(weatherData.condition === 'Rain' && weatherData.precipitation > 5){
        rainscore += 12
    }
    if(weatherData.condition === 'Drizzle'){
        rainscore += 3
    }

    // windspeed scoring
    if(weatherData.windSpeed < 10){
        windscore = 0
    }
    if(weatherData.windSpeed >= 10 && weatherData.windSpeed <= 20){
        windscore += 4
    }
    if(weatherData.windSpeed > 20 && weatherData.windSpeed <= 30){
        windscore += 8
    }
    if(weatherData.windSpeed > 30){
        windscore += 12
    }

    // visibility scoring
    if(weatherData.visibility >=  5000){
        visibilityscore += 0
    }
    if(weatherData.visibility < 5000 && weatherData.visibility >= 2000){
        visibilityscore += 4
    }
    if(weatherData.visibility < 2000 && weatherData.visibility >= 1000){
        visibilityscore += 8
    }
    if(weatherData.visibility < 1000){
        visibilityscore += 12
    }

    // if for pollution
    if(airQuality.aqiLabel === 'Low'){
        pollutionscore += 1
    }
    if(airQuality.aqiLabel === 'Fair'){
        pollutionscore += 2
    }
    if(airQuality.aqiLabel === 'Moderate'){
        pollutionscore += 3
    }
    if(airQuality.aqiLabel === 'High' || airQuality.aqiLabel === 'Very High'){
        pollutionscore += 4
    }

    // temp scoring
    if(weatherData.temp > 27){
        tempscore += 7
    }
    if(weatherData.temp <= 27 && weatherData.temp >= 15){
        tempscore = 0
    }
    if(weatherData.temp < 15 && weatherData.temp >= 5){
        tempscore += 3
    }
    if(weatherData.temp < 5 && weatherData.temp >= 0){
        tempscore += 7
    }
    if(weatherData.temp < 0){
        tempscore += 10
    }

    total += windscore+rainscore+visibilityscore+pollutionscore+tempscore
    total *= 2

    if(total >= 0 && total <= 20){
        return ['Perfect cycling conditions', total]
    }
    if(total >= 21 && total <= 40){
        return ['Decent cycling conditions', total]
    }
    if(total >= 41 && total <= 60){
        return ['Bad cycling conditions', total]
    }
    if(total >= 61 && total <= 80){
        return ['Hazardous cycling conditions', total]
    }
    if(total >= 81){
        return ['Not recommended cycling', total]
    }
}