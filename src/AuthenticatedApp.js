import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import Home from 'routes/Home'
import Live from 'routes/Live'

const AuthenticatedApp = () => (
  <Switch>
    <Route path='/home' component={Home} />
    <Route path='/live' component={Live} />
    <Redirect to='/home' />
  </Switch>
)

export default AuthenticatedApp
