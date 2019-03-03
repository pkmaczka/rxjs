import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import './App.css'
import Playground from './Playground'
import Zadanie1 from './zadania/Zadanie1/Zadanie1'
import Zadanie2 from './zadania/Zadanie2/Zadanie2'
import Zadanie3 from './zadania/Zadanie3/Zadanie3'

const App = () => (
  <div className="App">
    <header className="App-header">
      <Router>
        <Switch>
          <Route path="/zadanie1" component={Zadanie1} />
          <Route path="/zadanie2" component={Zadanie2} />
          <Route path="/zadanie3" component={Zadanie3} />
          <Route exact path="/" component={Playground} />
        </Switch>
      </Router>
    </header>
  </div>
)

export default App
