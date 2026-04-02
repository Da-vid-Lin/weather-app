// Converting city names to latitude and longitude and vise versa

import axios from 'axios'

const URL = 'https://api.openweathermap.org'
const KEY = import.meta.env.VITE_OWM_API_KEY

export async function searchCity(query) {
    const response = await axios.get(`${URL}/geo/1.0/direct`, {
        params: {
            q: query+",London",
            limit: 4,
            appid: KEY,
        },
    })

    const results = response.data

    const locations = results.map(result => {
        return {
            name: result.name,
            lat: result.lat,
            lon: result.lon,
            country: result.country
        };
    })
    return locations
}


export async function reverseGeocode(lat, lon) {
    const response = await axios.get(`${URL}/geo/1.0/reverse`, {
        params: {
            lat: lat,
            lon: lon,
            limit: 1,
            appid: KEY,
        },
    })

    const results = response.data
    const firstResult = results[0]

    if (!firstResult) {return 'Unknown Location'}

    // Returns a more accurate name
    const response1 = await axios.get(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`)
    const addr = response1.data?.address
    return addr?.suburb || addr?.town || addr?.neighbourhood || addr?.city_district || addr?.village || addr?.city || 'Unknown Location'

    //return firstResult.name
}