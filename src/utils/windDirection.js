// Takes wind direction in degrees and converts it into cardinal directions
// e.g. 90 degrees would be "East"

export function getWindDirection(degrees) {
    const directions = [
        'North', 'North East', 'East', 'South East',
        'South', 'South West', 'West', 'North West'
    ]

    const index = Math.round(degrees / 45) % 8

    return directions[index]
}