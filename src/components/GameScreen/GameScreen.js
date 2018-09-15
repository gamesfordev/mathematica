import React, { Component } from 'react';
import './GameScreen.css';
import GameArea from './GameArea/GameArea';

class GameScreen extends Component {
  render() {
    return (
      <div className="GameScreen">
        <div className="row">
            <div className="left-screen">
                <div className="game-ui">
                    <GameArea></GameArea>
                </div>
            </div>
            <div className="right-screen">
                <div className="score-area">
                    dd
                </div>
                <div className="chances">
                    ff
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default GameScreen;
