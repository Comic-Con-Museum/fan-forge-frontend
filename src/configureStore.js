import {
  createStore, applyMiddleware, combineReducers, compose
} from 'redux'

import { connectRoutes } from 'redux-first-router'

import thunk from 'redux-thunk';
import routesMap from './routesMap'
import * as reducers from './reducers'
import * as actionCreators from './actions'

export default history => {
  const { reducer, middleware, enhancer } = connectRoutes(history, routesMap)

  const rootReducer = combineReducers({ ...reducers, location: reducer })
  const middlewares = applyMiddleware(middleware, thunk)
  const enhancers = composeEnhancers(enhancer, middlewares)

  return createStore(rootReducer, enhancers)
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ actionCreators })
  : compose
