import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import GameScreen from './components/GameScreen/GameScreen';
import StartScreen from './components/StartScreen/StartScreen';
import EndScreen from './components/EndScreen/EndScreen';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={StartScreen} />
          <Route path="/game/:user" component={GameScreen} />
          <Route path="/end" component={EndScreen} />
        </div>
      </Router>
    );
  }
}

export default App;
