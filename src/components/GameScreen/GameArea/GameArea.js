import React, { Component } from 'react';
import { Redirect } from 'react-router'
import './GameArea.css';
import FallingElement from './GameObjects/FallingElement/FallingElement';
import challengeList from '../../../gamedata/challenges/Challenges';

class GameArea extends Component {

    buffer = "";
    nextId = 0;
    chances = 0;
    maxChances = 3;
    loop = null;
    redirect = false;

    gameObjects = {
        elements : []
    };

    getNextChallenge() {
        return challengeList[parseInt(Math.random() * 1000000) % (challengeList.length)];
    }

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

    removeElement(item) {
        console.log("remove me" + item);
        if(this.chances < this.maxChances) {
            for(let i in this.gameObjects.elements){
                if(item == this.gameObjects.elements[i].id) {
                    delete this.gameObjects.elements[i];
                    this.setState(this.gameObjects);
                    break;
                }
            }
            this.chances ++;
            console.log("chances " + this.chances);
        }
        else {
            this.redirect = true;
        }
    }

    getNewFallingElement() {
        let id = this.nextId++;
        let chal = this.getNextChallenge();
        console.log(chal);
        let elem = {
            id : id,
            answer : chal.ans,
            dom : <FallingElement key={id} id={id} challenge={chal.q} removeElement={this.removeElement.bind(this)}/>
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
        if(this.redirect) {
            //return <Redirect to='/end'/>;
        }
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
