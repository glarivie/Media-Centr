import React from 'react'
import { Route, IndexRoute/*, Redirect */} from 'react-router'

import App from './containers/App'
import Home from './containers/Home'
import Movies from './containers/Movies'
import Player from './containers/Player'
// import Page404 from './containers/Page404'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="movies" component={Movies} />
    <Route path="play/:id" component={Player} />
    {/* <Route path="404" component={Page404} /> */}
    {/* <Redirect from="*" to="404" /> */}
  </Route>
)
