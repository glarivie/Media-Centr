import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

import app from './app'

const rootReducer = combineReducers({
  routing,
  app,
})

export default rootReducer
