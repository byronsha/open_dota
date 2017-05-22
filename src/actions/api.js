import axios from 'axios'

const API_URL = 'https://api.opendota.com/api'

export const REQUEST_HERO_STATS = 'REQUEST_HERO_STATS'
export const RECEIVE_HERO_STATS = 'RECEIVE_HERO_STATS'
export const HERO_STATS_FAILURE = 'HERO_STATS_FAILURE'

export function requestHeroStats() {
  return {
    type: REQUEST_HERO_STATS
  }
}

export function receiveHeroStats(stats) {
  return {
    type: RECEIVE_HERO_STATS,
    stats
  }
}

export function heroStatsFailure() {
  return {
    type: HERO_STATS_FAILURE
  }
}

export function fetchHeroStats() {
  return function(dispatch) {
    dispatch(requestHeroStats())

    return axios.get(`${API_URL}/heroStats`)
      .then(res => {
        dispatch(receiveHeroStats(res.data))
      })
      .catch(err => {
        console.log(err)
        dispatch(heroStatsFailure())
      })
  }
}