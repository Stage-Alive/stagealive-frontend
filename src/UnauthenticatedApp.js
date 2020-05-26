import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Login from 'routes/Login'
import Register from 'routes/Register'
import Contact from 'routes/Contact'
import Lives from 'routes/Lives'
import Home from 'routes/Home'
import ResetPassword from 'routes/ResetPassword'

const UnauthenticatedApp = () => {
  return (
    <Switch>
      <Route path='/login' component={Login} />
      <Route path='/cadastro' component={Register} />
      <Route path='/contato' component={Contact} />
      <Route path='/lives' component={Lives} />
      <Route path='/reset-password' component={ResetPassword} />
      <Route path='/home' component={Home} />
      <Redirect to='/login' />
    </Switch>
  )
}
export default UnauthenticatedApp
