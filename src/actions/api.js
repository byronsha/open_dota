import axios from 'axios'

const API_URL = 'https://api.opendota.com/api'

export const REQUEST_HERO_STATS = 'REQUEST_HERO_STATS'
export const RECEIVE_HERO_STATS = 'RECEIVE_HERO_STATS'
export const HERO_STATS_FAILURE = 'HERO_STATS_FAILURE'

export const REQUEST_PUBLIC_MATCHES = 'REQUEST_PUBLIC_MATCHES'
export const RECEIVE_PUBLIC_MATCHES = 'RECEIVE_PUBLIC_MATCHES'
export const PUBLIC_MATCHES_FAILURE = 'PUBLIC_MATCHES_FAILURE'

export const REQUEST_PRO_MATCHES = 'REQUEST_PRO_MATCHES'
export const RECEIVE_PRO_MATCHES = 'RECEIVE_PRO_MATCHES'
export const PRO_MATCHES_FAILURE = 'PRO_MATCHES_FAILURE'

export const REQUEST_MMR_DISTRIBUTIONS = 'REQUEST_MMR_DISTRIBUTIONS'
export const RECEIVE_MMR_DISTRIBUTIONS = 'RECEIVE_MMR_DISTRIBUTIONS'
export const MMR_DISTRIBUTIONS_FAILURE = 'MMR_DISTRIBUTIONS_FAILURE'

export const REQUEST_MATCH_DETAILS = 'REQUEST_MATCH_DETAILS'
export const RECEIVE_MATCH_DETAILS = 'RECEIVE_MATCH_DETAILS'
export const MATCH_DETAILS_FAILURE = 'MATCH_DETAILS_FAILURE'

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

export function requestProMatches() {
  return {
    type: REQUEST_PRO_MATCHES
  }
}

export function receiveProMatches(matches) {
  return {
    type: RECEIVE_PRO_MATCHES,
    matches
  }
}

export function proMatchesFailure() {
  return {
    type: PRO_MATCHES_FAILURE
  }
}

export function fetchProMatches() {
  return function(dispatch) {
    dispatch(requestProMatches())

    return axios.get(`${API_URL}/proMatches`)
      .then(res => {
        dispatch(receiveProMatches(res.data))
      })
      .catch(err => {
        console.log(err)
        dispatch(proMatchesFailure())
      })
  }
}

export function requestMmrDistribution() {
  return {
    type: REQUEST_MMR_DISTRIBUTIONS
  }
}

export function receiveMmrDistribution(stats) {
  return {
    type: RECEIVE_MMR_DISTRIBUTIONS,
    stats
  }
}

export function mmrDistributionFailure() {
  return {
    type: MMR_DISTRIBUTIONS_FAILURE
  }
}

export function fetchMmrDistribution() {
  return function(dispatch) {
    dispatch(requestMmrDistribution())

    return axios.get(`${API_URL}/distributions`)
      .then(res => {
        dispatch(receiveMmrDistribution(res.data))
      })
      .catch(err => {
        console.log(err)
        dispatch(mmrDistributionFailure())
      })
  }
}

export function requestMatchDetails() {
  return {
    type: REQUEST_MATCH_DETAILS
  }
}

export function receiveMatchDetails(match) {
  return {
    type: RECEIVE_MATCH_DETAILS,
    match
  }
}

export function matchDetailsFailure(matchId) {
  return {
    type: MATCH_DETAILS_FAILURE,
    matchId
  }
}

export function fetchMatchDetails(matchId) {
  return function(dispatch) {
    dispatch(requestMatchDetails())

    return axios.get(`${API_URL}/matches/${matchId}`)
      .then(res => {
        dispatch(receiveMatchDetails(res.data))
      })
      .catch(err => {
        console.log(err)
        dispatch(matchDetailsFailure(matchId))
      })
  }
}
