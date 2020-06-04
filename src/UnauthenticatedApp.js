import React from 'react'
import { Switch, Route, Redirect, useLocation } from 'react-router-dom'

import Login from 'routes/Login'
import Register from 'routes/Register'
import Contact from 'routes/Contact'
import Lives from 'routes/Lives'
import Home from 'routes/Home'
import ResetPassword from 'routes/ResetPassword'
import ForgetPassword from 'routes/ForgetPassword'

const UnauthenticatedApp = () => {
  const location = useLocation()
  if (location.pathname.includes('live/')) {
    window.localStorage.setItem('live', location.pathname)
  }

  return (
    <Switch>
      <Route path='/login' component={Login} />
      <Route path='/cadastro' component={Register} />
      <Route path='/contato' component={Contact} />
      <Route path='/lives' component={Lives} />
      <Route path='/reset-password' component={ResetPassword} />
      <Route path='/forget-password' component={ForgetPassword} />
      <Route path='/home' component={Home} />
      <Route path='/' component={Home} />
      <Redirect to='/login' />
    </Switch>
  )
}
export default UnauthenticatedApp
