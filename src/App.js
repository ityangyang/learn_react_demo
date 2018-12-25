import React, { Component } from 'react';
import './App.css';
import Timer from './components/timer/timer';
import Graph from './components/graph/graph';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        timerDiffBG: 0,
        histoGramData: null
    };
  }

  handleGraphClick() {
    this.setState({
      timerDiffBG: Math.abs(this.state.timerDiffBG - 1)
    });
  }

  modifyHistoGramData() {
    let arr = [];
    for (let i = 0; i < 6; i++) {
        arr.push(Math.ceil(Math.random()*40));
    }

    this.setState({
      histoGramData: arr
    });
  }

  render() {
    return (
      <div className="App">
        <Timer handleTimerClick={this.modifyHistoGramData.bind(this)} isDiffBG={this.state.timerDiffBG}/>
        <Graph handleGraphClick={this.handleGraphClick.bind(this)} histoGramData={this.state.histoGramData} />
      </div>
    );
  }
}

export default App;
