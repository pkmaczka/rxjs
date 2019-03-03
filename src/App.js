import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Zadanie1 from './zadania/Zadanie1/Zadanie1'
import Zadanie3 from './zadania/Zadanie3/Zadanie3'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Zadanie3 />
        </header>
      </div>
    );
  }
}

export default App;
