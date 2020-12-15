import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Index from './components/pages/Index'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Index} />
      </Switch>
    </BrowserRouter>
  )
}

export default App

