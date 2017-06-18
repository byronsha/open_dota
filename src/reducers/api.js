import {
  REQUEST_HERO_STATS,
  RECEIVE_HERO_STATS,
  HERO_STATS_FAILURE,

  REQUEST_PUBLIC_MATCHES,
  RECEIVE_PUBLIC_MATCHES,
  PUBLIC_MATCHES_FAILURE,

  REQUEST_PRO_MATCHES,
  RECEIVE_PRO_MATCHES,
  PRO_MATCHES_FAILURE,

  REQUEST_MMR_DISTRIBUTIONS,
  RECEIVE_MMR_DISTRIBUTIONS,
  MMR_DISTRIBUTIONS_FAILURE,
 
  REQUEST_MATCH_DETAILS,
  RECEIVE_MATCH_DETAILS,
  MATCH_DETAILS_FAILURE,

  REQUEST_ITEMS,
  RECEIVE_ITEMS,
  ITEMS_FAILURE
} from '../actions/api'

const initialState = {
  heroStats: [],
  heroStatsLoading: false,
  proMatches: [],
  proMatchesLoading: false,
  publicMatches: [],
  publicMatchesLoading: false,
  mmrDistribution: null,
  mmrDistributionLoading: false,
  matchDetails: null,
  matchDetailsLoading: false,
  items: [],
  itemsLoading: false,
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
        publicMatchesLoading: true,
        errorMessage: ''
      }
    case RECEIVE_PUBLIC_MATCHES:
      return {
        ...state,
        publicMatchesLoading: false,
        publicMatches: action.matches,
        errorMessage: ''
      }
    case PUBLIC_MATCHES_FAILURE:
      return {
        ...state,
        publicMatchesLoading: false,
        publicMatches: [],
        errorMessage: 'Failed to retrieve public matches'
      }
    case REQUEST_PRO_MATCHES:
      return {
        ...state,
        proMatchesLoading: true,
        errorMessage: ''
      }
    case RECEIVE_PRO_MATCHES:
      return {
        ...state,
        proMatchesLoading: false,
        proMatches: action.matches,
        errorMessage: ''
      }
    case PRO_MATCHES_FAILURE:
      return {
        ...state,
        proMatchesLoading: false,
        proMatches: [],
        errorMessage: 'Failed to retrieve pro matches'
      }
    case REQUEST_MMR_DISTRIBUTIONS:
      return {
        ...state,
        mmrDistributionLoading: true,
        errorMessage: ''
      }
    case RECEIVE_MMR_DISTRIBUTIONS:
      return {
        ...state,
        mmrDistributionLoading: false,
        mmrDistribution: action.stats,
        errorMessage: ''
      }
    case MMR_DISTRIBUTIONS_FAILURE:
      return {
        ...state,
        mmrDistributionLoading: false,
        mmrDistribution: null,
        errorMessage: 'Failed to retrieve MMR distribution'
      }
    case REQUEST_MATCH_DETAILS:
      return {
        ...state,
        matchDetailsLoading: true,
        errorMessage: ''
      }
    case RECEIVE_MATCH_DETAILS:
      return {
        ...state,
        matchDetailsLoading: false,
        matchDetails: action.match,
        errorMessage: ''
      }
    case MATCH_DETAILS_FAILURE:
      return {
        ...state,
        matchDetailsLoading: false,
        matchDetails: null,
        errorMessage: `Failed to retrieve details for Match ID ${action.matchId}`
      }
    case REQUEST_ITEMS:
      return {
        ...state,
        itemsLoading: true,
        errorMessage: ''
      }
    case RECEIVE_ITEMS:
      return {
        ...state,
        itemsLoading: false,
        items: action.items,
        errorMessage: ''
      }
    case ITEMS_FAILURE:
      return {
        ...state,
        itemsLoading: false,
        items: [],
        errorMessage: 'Failed to retrieve items'
      }
    default:
      return state
  }
}

export default api