import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import Home from 'routes/Home'
import Live from 'routes/Live'
import Contact from 'routes/Contact'
import Profile from 'routes/Profile'
import Lives from 'routes/Lives'
import CreateLive from 'routes/CreateLive'

const AuthenticatedApp = () => (
  <Switch>
    <Route path='/home' component={Home} />
    <Route path='/live/:id' component={Live} />
    <Route path='/lives' component={Lives} />
    <Route path='/perfil' component={Profile} />
    <Route path='/contato' component={Contact} />
    <Route path='/create-live' component={CreateLive} />
    <Route path='/create-live' component={CreateLive} />
    <Redirect to='/home' />
  </Switch>
)

export default AuthenticatedApp
