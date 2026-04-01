// Takes unix time stamps and converts it into a more human friendly time
// e.g. 1711929600 will be turned into Monday

export function formatDate(unixTimestamp){
    const date = new Date(unixTimestamp * 1000)
    return date.toLocaleDateString('en-GB', {
        weekday: 'short'
    })


}