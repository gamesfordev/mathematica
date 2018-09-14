import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './StartScreen.css';

class StartScreen extends Component {
  render() {
    return (
      <div className="StartScreen">
        This is StartScreen
        <Link to="/game"><button>Start</button></Link>
      </div>
    );
  }
}

export default StartScreen;
