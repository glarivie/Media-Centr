import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import { Router, useRouterHistory } from 'react-router'
import { createHistory } from 'history'
import { syncHistoryWithStore } from 'react-router-redux'

// Main global stylesheet
import './styles/main.css'

import configureStore from './configureStore'
import router from './router'

const store = configureStore()
const browserHistory = useRouterHistory(createHistory)({ basename: '' })
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <Router history={history} routes={router} />
  </Provider>,
  document.getElementById('root')
)
