import React, { Component } from 'react';
import './GameArea.css';
import FallingElement from './GameObjects/FallingElement/FallingElement';

class GameArea extends Component {

    componentWillMount() {
        this.fallingElements = [<FallingElement/>];

    }

    render() {
        return (
            <div className="GameArea">
                {this.fallingElements}
            </div>
        );
    }
}

export default GameArea;
