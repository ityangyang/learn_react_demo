import React, { Component } from 'react';
import './App.css';
import Timer from './components/timer/timer';
import Graph from './components/graph/graph';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        timerDiffBG: 0
    };
  }

  handleGraphClick() {
    this.setState({
      timerDiffBG: Math.abs(this.state.timerDiffBG - 1)
    });
  }

  render() {
    return (
      <div className="App">
        <Timer isDiffBG={this.state.timerDiffBG}/>
        <Graph handleGraphClick={this.handleGraphClick.bind(this)} />
      </div>
    );
  }
}

export default App;
