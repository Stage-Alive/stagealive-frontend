import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import Home from 'routes/Home'
import Live from 'routes/Live'
import Contact from 'routes/Contact'
import Profile from 'routes/Profile'

const AuthenticatedApp = () => (
  <Switch>
    <Route path='/home' component={Home} />
    <Route path='/live/:id' component={Live} />
    <Route path='/perfil' component={Profile} />
    <Route path='/contato' component={Contact} />
    <Redirect to='/home' />
  </Switch>
)

export default AuthenticatedApp
