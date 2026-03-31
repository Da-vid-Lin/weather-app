// Takes weatherData and returns what gear the cyclist should bring

export function getGearSuggest(weatherData){
    let Gears = []

    if(weatherData.condition === 'Tornado'){
        return 'Stay Indoors'
    }
    
    if(weatherData.condition === 'Thunderstorm'){
        Gears.push('Waterproof Clothes')
    }

    if(weatherData.condition === 'Squall'){
        Gears.push('Windproof Gear')
    }

    if(weatherData.condition === 'Rain' || weatherData.condition === 'Drizzle'){
        Gears.push('Waterproof Clothes')
    }

    if(weatherData.condition === 'Snow'){
        Gears.push('Insulated Clothes')
        Gears.push('Snow Tires')
    }

    if(weatherData.condition === 'Fog' || weatherData.condition === 'Mist' || weatherData.condition === 'Haze'){
        Gears.push('High-Vis Jacket')
    }
    
    if(weatherData.condition === 'Smoke' || weatherData.condition === 'Dust' || weatherData.condition === 'Sand' || weatherData.condition === 'Ash'){
        Gears.push('Face Mask')
        Gears.push('Goggles')
    }

    if(weatherData.visibility < 2000){
        Gears.push('Bike Lights')
    }

    if (Gears.length == 0){
        return ["None Needed !"]
    }
    return Gears
}