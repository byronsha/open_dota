import {
  PRO_SET_ORDER_BY,
  PRO_SET_ORDER_DIRECTION,
  PUBLIC_SET_ORDER_BY,
  PUBLIC_SET_ORDER_DIRECTION
} from '../actions/heroStats'

const initialState = {
  proOrderBy: 'winrate',
  proOrderDirection: 'desc',
  publicOrderBy: 'winrate',
  publicOrderDirection: 'desc'
}

function heroStats(state = initialState, action) {
  switch (action.type) {
    case PRO_SET_ORDER_BY:
      return {
        ...state,
        proOrderBy: action.stat
      }
    case PRO_SET_ORDER_DIRECTION:
      return {
        ...state,
        proOrderDirection: action.direction
      }
    case PUBLIC_SET_ORDER_BY:
      return {
        ...state,
        publicOrderBy: action.stat
      }
    case PUBLIC_SET_ORDER_DIRECTION:
      return {
        ...state,
        publicOrderDirection: action.direction
      }
    default:
      return state
  }
}

export default heroStats