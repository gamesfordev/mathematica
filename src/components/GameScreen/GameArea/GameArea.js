import React, { Component } from 'react';
import { Redirect } from 'react-router';
import './GameArea.css';
import FallingElement from './GameObjects/FallingElement/FallingElement';
import challengeList from '../../../gamedata/challenges/Challenges';
import fire from "../../../fire";

class GameArea extends Component {

    buffer = "";
    nextId = 0;
    chances = 0;
    score = 0;
    maxChances = 3;
    loop = null;
    redirect = false;
    chalPointer = 0;
    running = false;

    gameObjects = {
        elements: []
    };
    

    getNextChallenge() {
        if(this.chalPointer == challengeList.length) return false;
        return challengeList[this.chalPointer++];
    }

    processAns(ans) {
        for (let i in this.gameObjects.elements) {
            if (ans == this.gameObjects.elements[i].answer) {
                this.props.playEffect('correct-sound');
                this.updateScore(this.gameObjects.elements[i].score);
                delete this.gameObjects.elements[i];
                this.setState(this.gameObjects);
                break;
            }
            else {
                this.props.playEffect('wrong-sound');
            }
        }
    }

    handleKeyPress(e) {
        console.log(e);
        let ans = "";
        switch (e.key) {
            case "Enter":
                ans = this.buffer;
                this.buffer = "";
                this.processAns(ans);
                break;
            case "Backspace":
                this.buffer = this.buffer.substr(0, (this.buffer.length - 1));
                break;

            default:
                if((e.keyCode >= 65 && e.keyCode <= 90) || e.key != "Shift") {
                    this.buffer += e.key;
                }
                break;
        }
        this.props.updateBuffer(this.buffer);

    }

    updateScore(score) {
        this.score += score;
        this.props.updateScore(this.score);
    }

    removeElement(item) {
        this.chances++;
        this.props.playEffect('missed-sound');
        this.props.flashImage();
        this.props.updateChances(this.chances);
        if (this.chances <= this.maxChances) {
            for (let i in this.gameObjects.elements) {
                if (item == this.gameObjects.elements[i].id) {
                    delete this.gameObjects.elements[i];
                    this.setState(this.gameObjects);
                    break;
                }
            }

        }
        else {
            clearInterval(this.loop);
            this.redirect = true;
        }
    }

    getNewFallingElement() {
        this.props.playEffect('newelement-sound');
        let id = this.nextId++;
        let chal = this.getNextChallenge();
        if(!chal) {
            clearInterval(this.loop);
            this.redirect = true;
        }
        let elem = {
            id: id,
            answer: chal.ans,
            score: chal.score,
            dom: <FallingElement key={id} id={id} challenge={chal.q} removeElement={this.removeElement.bind(this)} />
        };
        return elem;
    }

    componentDidMount() {
        this.setState(this.gameObjects);
    }

    componentDidMount() {
        this.startGameLoop();
        window.onkeydown = this.handleKeyPress.bind(this);
    }

    startGameLoop() {
        let self = this;
        this.loop = setInterval(() => {
            this.running = true;
            this.gameObjects.elements.push(this.getNewFallingElement());
            this.setState(this.gameObjects);

        }, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.loop);
        this.running = false;
    }

    render() {
        if(!this.running) {
            return (
                <div className="GameArea">
                   <div className="welcome">
                        <h2>Mathematica Challenge</h2>
                        <div>
                            <br/>
                            <h4>How to play!</h4>
                            <br/>
                            <div style={{'fontSize' : '18px'}}>
                                Solve a floating algebraic expression<br/>
                                Type answer , then hit enter 
                            </div>
                        </div>
                   </div>
                </div>
            ); 
        }
        if (this.redirect) {
            let $=this;
            fire.orderByChild("user").equalTo(this.props.user).once('value',snapshot=>{
                console.log(snapshot.val());
                if (snapshot.exists()){
                    snapshot.forEach(function(child) {
                        child.ref.update({
                            score:$.score
                        });
                    });

                }else{
                    fire.push({
                        user:this.props.user,
                        score:this.score
                    });
                }
            })



            localStorage.setItem('score',this.score);
            return <Redirect to='/end'/>;
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
