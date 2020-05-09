import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import Home from 'routes/Home'
import Live from 'routes/Live'
import Contact from 'routes/Contact'

const AuthenticatedApp = () => (
  <Switch>
    <Route path='/home' component={Home} />
    <Route path='/live' component={Live} />
    <Route path='/contato' component={Contact} />
    <Redirect to='/home' />
  </Switch>
)

export default AuthenticatedApp
