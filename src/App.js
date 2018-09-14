import React, { Component } from 'react';
import './App.css';
import GameScreen from './components/GameScreen/GameScreen';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GameScreen></GameScreen>
      </div>
    );
  }
}

export default App;
