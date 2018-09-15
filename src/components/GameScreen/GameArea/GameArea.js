import React, { Component } from 'react';
import './GameArea.css';
import FallingElement from './GameObjects/FallingElement/FallingElement';

class GameArea extends Component {

    buffer = "";

    gameObjects = {
        elements : []
    };

    handleKeyPress(e) {
        console.log(e);
        if(e.key == "Enter") {
            alert(this.buffer);
            this.buffer = "";
        }
        else {
            this.buffer += e.key;
        }
        

    }

    getNewFallingElement() {
        let id = Math.random();
        let elem = {
            answer : id,
            dom : <FallingElement key={id}/>
        };
        return elem;
    }

    componentWillMount() {
        this.setState(this.gameObjects);
        this.startGameLoop();
        window.onkeypress = this.handleKeyPress.bind(this);
    }

    startGameLoop() {
        let self = this;
        setInterval(() => {
            this.gameObjects.elements.push(this.getNewFallingElement());
            this.setState(this.gameObjects);
            
        }, 5000);
    }

    render() {
        console.log(this.state);
        return (
            <div className="GameArea">
                {
                    this.state.elements.map((elem) => {
                        return elem.dom;
                    })
                }
            </div>
        );
    }
}

export default GameArea;
