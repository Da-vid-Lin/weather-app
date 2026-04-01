// Takes minutes and converts it into a more human friendly time
// e.g. 80mins will be turned into 1h20m

export function formatDuration(minutes) {
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60

    if (hours === 0) { return `${mins}m` }
    if (mins === 0) { return `${hours}h` }
    
    return `${hours}h ${mins}m`
}