export function getGearSuggest(weatherData){
    let suggestString = 'Recommended gear: Protective gear, '

    if(weatherData.condition === 'Tornado'){
        return 'Warning Tornado'
    }
    if(weatherData.condition === 'Thunderstorm'){
        return 'Recommended gear: Waterproof clothing, High-vis Jacket, Insulated clothing'
    }

    if(weatherData.condition === 'Squall' || weatherData.windSpeed > 20){
        suggestString +='light gear '
    }
    if(weatherData.condition === 'Rain' || weatherData.condition === 'Drizzle'){
        suggestString +='Water proof clothing '
    }
    if(weatherData.condition === 'Snow'){
        suggestString +='Insulated clothing, Snow tires'
    }
    if(weatherData.condition === 'Fog' || weatherData.condition === 'Mist' || weatherData.condition === 'Haze'){
        suggestString +='High-vis Jacket '
    }
    
    if(weatherData.condition === 'Smoke' || weatherData.condition === 'Dust' || weatherData.condition === 'Sand' || weatherData.condition === 'Ash'){
        suggestString +='Face mask, Goggles '
    }

    if(weatherData.visibility < 2000){
        suggestString +='Bike lights '
    }
    return suggestString
}