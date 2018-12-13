import React, { Component } from 'react';
import './App.css';
import Timer from './components/timer/timer';
import Graph from './components/graph/graph';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Timer />
        <Graph />
      </div>
    );
  }
}

export default App;
