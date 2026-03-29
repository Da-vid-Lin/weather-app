import axios from 'axios'

const URL = 'https://api.openweathermap.org'
const KEY = import.meta.env.VITE_OWM_API_KEY

export async function searchCity(query) {
    const response = await axios.get(`${URL}/geo/1.0/direct`, {
        params: {
            q: query,
            limit: 3,
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

  return firstResult.name
}