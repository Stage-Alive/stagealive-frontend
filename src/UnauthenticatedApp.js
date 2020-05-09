import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Login from 'routes/Login'
import Register from 'routes/Register'
import Contact from 'routes/Contact'

const UnauthenticatedApp = () => (
  <Switch>
    <Route path='/login' component={Login} />
    <Route path='/cadastro' component={Register} />
    <Route path='/contato' component={Contact} />
    <Redirect to='/login' />
  </Switch>
)

export default UnauthenticatedApp
