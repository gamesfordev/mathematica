import React, { Component } from 'react';
import './GameArea.css';
import FallingElement from './GameObjects/FallingElement/FallingElement';

class GameArea extends Component {

    buffer = "";
    nextId = 0;
    loop = null;

    gameObjects = {
        elements : []
    };


    processAns(ans) {
        console.log("handling ans");
        for(let i in this.gameObjects.elements){
            if(ans == this.gameObjects.elements[i].answer) {
                delete this.gameObjects.elements[i];
                this.setState(this.gameObjects);
                break;
            }
        }
    }

    handleKeyPress(e) {
        console.log(e);
        let ans = "";
        if(e.key == "Enter") {
            ans = this.buffer;
            this.processAns(ans);
            this.buffer = "";
        }
        else {
            this.buffer += e.key;
        }
        

    }

    getNewFallingElement() {
        let id = this.nextId++;
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
        this.loop = setInterval(() => {
            this.gameObjects.elements.push(this.getNewFallingElement());
            this.setState(this.gameObjects);
            
        }, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.loop);
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
