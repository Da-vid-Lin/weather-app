// Takes unix time stamps and converts it into a more human friendly time
// e.g. 1711929600 will be turned into 11 am

export function formatTime(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000)
    return date.toLocaleTimeString('en-GB', {
        hour: 'numeric',
        hour12: true,
    })
}