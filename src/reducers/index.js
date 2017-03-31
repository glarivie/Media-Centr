import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

import app from './app'
import movies from './movies'

const rootReducer = combineReducers({
  routing,
  app,
  movies,
})

export default rootReducer
