import { useEffect } from 'react'
import { reverseGeocode } from '../services/geocodingApi'
import { setLocationA } from '../contexts/weatherActions'

const FIVE_MINUTES = 5 * 60 * 1000

export function useGeoLocation(dispatch) {

    useEffect(() => {

        async function updateLocation() {

            const position = await new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(resolve, reject)
            })

            const lat = position.coords.latitude
            const lon = position.coords.longitude

            const locationName = await reverseGeocode(lat, lon)

            setLocationA(dispatch, locationName)
            console.log(locationName)
        }

        updateLocation()

        const intervalId = setInterval(updateLocation, FIVE_MINUTES)

        return () => clearInterval(intervalId)

    }, [dispatch])
}