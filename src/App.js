import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import './App.css'
import Playground from './Playground'
import Zadanie1 from './zadania/Zadanie1/Etap1'
import Zadanie2 from './zadania/Zadanie2/Zadanie2'

const App = () => (
  <div className="App">
    <header className="App-header">
      <Router>
        <Switch>
          <Route path="/zadanie1" component={Zadanie1} />
          <Route path="/zadanie2" component={Zadanie2} />
          <Route path="/zadanie3" component={Zadanie2} />
          <Route exact path="/" component={Playground} />
        </Switch>
      </Router>
    </header>
  </div>
)

export default App
