import axios from 'axios'

const URL = 'https://api.openweathermap.org'
const KEY = import.meta.env.VITE_OWM_API_KEY

export async function fetchCurrentWeather(lat, lon, units = 'metric') {
    const response = await axios.get(`${URL}/data/2.5/weather`, {
        params: {
            lat: lat,
            lon: lon,
            units: units,
            appid: KEY,
        },
    })

    const data = response.data

    var precipitation = Math.max(
        data.rain?.['1h'] ?? 0,
        data.snow?.['1h'] ?? 0
    )

    return {
        temp: data.main.temp,
        windSpeed: data.wind.speed,
        windDeg: data.wind.deg,
        windGust: data.wind.gust ?? 0,
        description: data.weather[0].description,
        condition: data.weather[0].main,
        humidity: data.main.humidity,
        visibility: data.visibility,
        precipitation: precipitation,
        pressure: data.main.pressure,
    }
}


export async function fetchHourlyForecast(lat, lon, units = 'metric') {
    const response = await axios.get(`${URL}/data/2.5/forecast/hourly`, {
        params: {
            lat: lat,
            lon: lon,
            units: units,
            appid: KEY,
        },
    })

    const data = response.data

    const hourly = data.list.slice(0, 24).map(hour => {
        return {
            time: hour.dt,
            temp: hour.main.temp,
            icon: hour.weather[0].icon,
            precipitation: hour.rain?.['1h'] ?? 0,
            
        }
    })

    return hourly
}


export async function fetchDailyForecast(lat, lon, units = 'metric') {
    const response = await axios.get(`${URL}/data/2.5/forecast/daily`, {
        params: {
            lat: lat,
            lon: lon,
            units: units,
            appid: KEY,
        },
    })

    const data = response.data

    const daily = data.list.slice(0, 7).map(day => {
        return {
            date: day.dt,
            minTemp: day.temp.min,
            maxTemp: day.temp.max,
            icon: day.weather[0].icon,
            description: day.weather[0].description,
        }
    })

    return daily
}


export async function fetchAirQuality(lat, lon) {
    const response = await axios.get(`${URL}/data/2.5/air_pollution`, {
        params: {
            lat: lat,
            lon: lon,
            appid: KEY,
        },
    })

    const firstResult = response.data.list[0]
    const aqi = firstResult.main.aqi

    const aqiLabels = ['Low', 'Fair', 'Moderate', 'High', 'Very High']
    const aqiLabel = aqiLabels[aqi - 1]

    return {
        aqi: aqi,
        aqiLabel: aqiLabel,
        pm2_5: firstResult.components.pm2_5,
        no2: firstResult.components.no2,
        o3: firstResult.components.o3,
    }
}