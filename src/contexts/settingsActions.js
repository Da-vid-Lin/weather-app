import { SETTINGS } from './settingsReducer'

// Functions to allow us to run e.g. setUnits(dispatch, 'imperial')
// Rather than having to write dispatch({type: 'SET_UNITS',payload: 'imperial'})
// Makes re-using these much easier to type 

export function setUnits(dispatch, units) {
    dispatch({
        type: SETTINGS.SET_UNITS,
        payload: units
    })
}

export function setView(dispatch, view) {
    dispatch({ 
        type: SETTINGS.SET_VIEW, 
        payload: view 
    })
}

export function setDepth(dispatch, infoDepth) {
    dispatch({ 
        type: SETTINGS.SET_DEPTH, 
        payload: infoDepth 
    })
}

export function setHome(dispatch, home) {
    dispatch({ 
        type: SETTINGS.SET_HOME, 
        payload: home 
    })
}

export function setRecentDestinations(dispatch, newDestination, recentDestinations){
    if (recentDestinations.includes(newDestination)){
        const dupIndex = recentDestinations.indexOf(newDestination)
        recentDestinations.splice(dupIndex, 1)
        recentDestinations.unshift(newDestination)
        dispatch({
        type: SETTINGS.SET_RECENT_DESTINATIONS,
        payload: recentDestinations
        })
        return
    }

    if (recentDestinations.length === 3){
        recentDestinations.pop()
        recentDestinations.unshift(newDestination)
    }else{
        recentDestinations.unshift(newDestination)
    }

    dispatch({
        type: SETTINGS.SET_RECENT_DESTINATIONS,
        payload: recentDestinations
    })


}

export function addLog(dispatch, log, logList) {
    logList.push(log)

    dispatch({
        type: SETTINGS.SET_LOGS,
        payload: logList
    })
}

export function setLogFlag(dispatch, value) {
    dispatch({
        type: SETTINGS.SET_LOG_FLAG,
        payload: value
    })
}