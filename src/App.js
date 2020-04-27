import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'

import Home from 'routes/Home'
import Live from 'routes/Live'

const GlobalStyle = createGlobalStyle`
* {
  border: 0;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  outline: none;
}

button, a {
  cursor: pointer;
  &:disabled{
    cursor: not-allowed;
  }
}
`

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route path='/live' component={Live} />
        <Route path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
