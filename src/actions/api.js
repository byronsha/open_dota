import axios from 'axios'

const API_URL = 'https://api.opendota.com/api'

export const REQUEST_HERO_STATS = 'REQUEST_HERO_STATS'
export const RECEIVE_HERO_STATS = 'RECEIVE_HERO_STATS'
export const HERO_STATS_FAILURE = 'HERO_STATS_FAILURE'

export const REQUEST_PUBLIC_MATCHES = 'REQUEST_PUBLIC_MATCHES'
export const RECEIVE_PUBLIC_MATCHES = 'RECEIVE_PUBLIC_MATCHES'
export const PUBLIC_MATCHES_FAILURE = 'PUBLIC_MATCHES_FAILURE'

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

export function requestPublicMatches() {
  return {
    type: REQUEST_PUBLIC_MATCHES
  }
}

export function receivePublicMatches(matches) {
  return {
    type: RECEIVE_PUBLIC_MATCHES,
    matches
  }
}

export function publicMatchesFailure() {
  return {
    type: PUBLIC_MATCHES_FAILURE
  }
}

export function fetchPublicMatches() {
  return function(dispatch) {
    dispatch(requestPublicMatches())

    return axios.get(`${API_URL}/publicMatches?mmr_descending=1`)
      .then(res => {
        dispatch(receivePublicMatches(res.data))
      })
      .catch(err => {
        console.log(err)
        dispatch(publicMatchesFailure())
      })
  }
}