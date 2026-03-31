
export function formatDate(unixTimestamp){
    const date = new Date(unixTimestamp * 1000)
    return date.toLocaleDateString('en-GB', {
        weekday: 'short'
    })


}