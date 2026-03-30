// Rates how favourable weather condition are for cyclists
// e.g. 0-50 higher score = higher risk
// scoring: wind range from 0-12, rain range from 0-12, visibility 0-12, temparature 0-10,  pollution 0-4
// rating 0-10Perfect cycling conditions,11-20 decent cycling conditions, 
// 21-30bad cycling conditions, 31-40hazardous cycling conditions, 41-50 Not recommended cycling

export function getCyclingScore(weather,airQuality){
    let windscore = 0
    let rainscore = 0
    let visibilityscore = 0
    let pollutionscore = 0
    let tempscore = 0
    let total = 0
    
    // weather condition scoring
    if (weather.condition === 'Thunderstorm' || weather.condition === 'Ash' || weather.condition === 'Tornado' || weather.condition === 'Squall'){
        return 'Not recommended cycling'
    }
    if(weather.condition === 'Snow' || weather.condition === 'Fog' || weather.condition === 'Smoke' || weather.condition === 'Haze'){
        return 'Hazardous cycling conditions'
    }

    // drizzle and rain + precipitation for rainscore 
    if(weather.condition === 'Rain' && weather.precipitation < 2){
        rainscore += 5
    }
    if(weather.condition === 'Rain' && weather.precipitation >= 2 && weather.precipitation <= 5){
        rainscore += 8
    }
    if(weather.condition === 'Rain' && weather.precipitation > 5){
        rainscore += 12
    }
    if(weather.condition === 'Drizzle'){
        rainscore += 3
    }

    // windspeed scoring
    if(weather.windSpeed < 10){
        windscore = 0
    }
    if(weather.windSpeed >= 10 && weather.windSpeed <= 20){
        windscore += 4
    }
    if(weather.windSpeed > 20 && weather.windSpeed <= 30){
        windscore += 8
    }
    if(weather.windSpeed > 30){
        windscore += 12
    }

    // visibility scoring
    if(weather.visibility >=  5000){
        visibilityscore += 0
    }
    if(weather.visibility < 5000 && weather.visibility >= 2000){
        visibilityscore += 4
    }
    if(weather.visibility < 2000 && weather.visibility >= 1000){
        visibilityscore += 8
    }
    if(weather.visibility < 1000){
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
    if(weather.temp > 27){
        tempscore += 7
    }
    if(weather.temp <= 27 && weather.temp >= 15){
        tempscore = 0
    }
    if(weather.temp < 15 && weather.temp >= 5){
        tempscore += 3
    }
    if(weather.temp < 5 && weather.temp >= 0){
        tempscore += 7
    }
    if(weather.temp < 0){
        tempscore += 10
    }

    total += windscore+rainscore+visibilityscore+pollutionscore+tempscore

    if(total >= 0 && total <= 10){
        return 'Perfect cycling conditions'
    }
    if(total >= 11 && total <= 20){
        return 'Decent cycling conditions'
    }
    if(total >= 21 && total <= 30){
        return 'Bad cycling conditions'
    }
    if(total >= 31 && total <= 40){
        return 'Hazardous cycling conditions'
    }
    if(total >= 41){
        return 'Not recommended cycling'
    }
}