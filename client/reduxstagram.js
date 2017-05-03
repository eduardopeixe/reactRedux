import React from 'react'
import { render } from 'react-dom'
import css from './styles/style.styl'

// Import Components

import Main from './components/Main'
import Single from './components/Single'
import PhotoGrid from './components/PhotoGrid'

// import react routest deps
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

const router = (
  <Router history={browserHistory}>
    <Router path="/" component={Main}>
      <IndexRoute component={PhotoGrid}></IndexRoute>
      <Route path="/view/postId" component={Single}></Route>
    </Router>
  </Router>
)
render(router, document.getElementById('root'))