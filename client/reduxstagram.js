import React from 'react'
import { render } from 'react-dom'
import css from './styles/style.styl'

// Import Components

import App from './components/App'
import Single from './components/Single'
import PhotoGrid from './components/PhotoGrid'

// import react routest deps
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import {Provider} from 'react-redux'
import store, {history} from './store'
const router = (
  <Provider store={store}>
    <Router history={history}>
      <Router path="/" component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Router>
    </Router>
  </Provider>
)
render(router, document.getElementById('root'))
