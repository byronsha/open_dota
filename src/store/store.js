import { createStore, combineReducers, applyMiddleware } from 'redux'
import { hashHistory } from 'react-router'
import { routerMiddleware, routerReducer } from 'react-router-redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import api from '../reducers/api'

const rootReducer = combineReducers({
  api,
  routing: routerReducer
})

const masterMiddleware = applyMiddleware(
  thunkMiddleware,
  createLogger({ collapsed: true }),
  routerMiddleware(hashHistory)
)

const store = createStore(
  rootReducer,
  masterMiddleware
)

export default store