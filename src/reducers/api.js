import {
  REQUEST_HERO_STATS,
  RECEIVE_HERO_STATS,
  HERO_STATS_FAILURE
} from '../actions/api'

const initialState = {
  isLoading: false,
  heroStats: [],
  errorMessage: ''
}

function api(state = initialState, action) {
  switch (action.type) {
    case REQUEST_HERO_STATS:
      return {
        ...state,
        isLoading: true,
        errorMessage: ''
      }
    case RECEIVE_HERO_STATS:
      return {
        ...state,
        isLoading: false,
        heroStats: action.stats,
        errorMessage: ''
      }
    case HERO_STATS_FAILURE:
      return {
        ...state,
        isLoading: false,
        heroStats: [],
        errorMessage: 'Failed to retrieve hero stats'
      }
    default:
      return state
  }
}

export default api