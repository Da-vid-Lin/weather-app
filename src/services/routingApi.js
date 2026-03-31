import axios from 'axios'

const URL = 'https://api.openrouteservice.org'
const KEY = import.meta.env.VITE_ORS_API_KEY

export async function fetchRouteData(lon1,lat1,lon2,lat2) {
    const response = await axios.get(`${URL}/v2/directions/cycling-regular`, {
        params: {
            start: `${lon1},${lat1}`,
            end: `${lon2},${lat2}`,
            api_key: KEY,

        },
    })

    const data = response.data.features[0].properties.segments[0]

    const distance = (data.distance).toFixed(1)
    const duration = Math.round(data.duration / 60)

    return {
        distance: distance,
        duration: duration,
    }
}