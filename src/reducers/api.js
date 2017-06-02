import {
  REQUEST_HERO_STATS,
  RECEIVE_HERO_STATS,
  HERO_STATS_FAILURE,
  REQUEST_PUBLIC_MATCHES,
  RECEIVE_PUBLIC_MATCHES,
  PUBLIC_MATCHES_FAILURE
} from '../actions/api'

const initialState = {
  heroStatsLoading: false,
  matchesLoading: false,
  heroStats: [],
  publicMatches: [],
  errorMessage: ''
}

function api(state = initialState, action) {
  switch (action.type) {
    case REQUEST_HERO_STATS:
      return {
        ...state,
        heroStatsLoading: true,
        errorMessage: ''
      }
    case RECEIVE_HERO_STATS:
      return {
        ...state,
        heroStatsLoading: false,
        heroStats: action.stats,
        errorMessage: ''
      }
    case HERO_STATS_FAILURE:
      return {
        ...state,
        heroStatsLoading: false,
        heroStats: [],
        errorMessage: 'Failed to retrieve hero stats'
      }
    case REQUEST_PUBLIC_MATCHES:
      return {
        ...state,
        matchesLoading: true,
        errorMessage: ''
      }
    case RECEIVE_PUBLIC_MATCHES:
      return {
        ...state,
        matchesLoading: false,
        publicMatches: action.matches,
        errorMessage: ''
      }
    case PUBLIC_MATCHES_FAILURE:
      return {
        ...state,
        matchesLoading: false,
        publicMatches: [],
        errorMessage: 'Failed to retrieve public matches'
      }
    default:
      return state
  }
}

export default api