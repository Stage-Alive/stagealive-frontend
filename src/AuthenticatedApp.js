import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import Live from 'routes/Live'
import Profile from 'routes/Profile'
import CreateLive from 'routes/CreateLive'
import Home from 'routes/Home'
import Contact from 'routes/Contact'
import Lives from 'routes/Lives'
import CreateArtist from 'routes/CreateArtist'

const AuthenticatedApp = () => {
  return (
    <Switch>
      <Route path='/live/:id' component={Live} />
      <Route path='/perfil' component={Profile} />
      <Route path='/adicionar-live' component={CreateLive} />
      <Route path='/adicionar-artista' component={CreateArtist} />
      <Route path='/lives' component={Lives} />
      <Route path='/home' component={Home} />
      <Route path='/contato' component={Contact} />
      <Redirect to='/home' />
    </Switch>
  )
}

export default AuthenticatedApp
