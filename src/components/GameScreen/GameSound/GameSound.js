import React, { Component } from 'react';
import soundFile from '../../../assets/audio/bgmusic.mp3';
import beepFile from '../../../assets/audio/beep.mp3';

class GameSound extends Component {

  playEffect(effect) {
    console.log("play sound : " + effect);
    let audio = new Audio(beepFile);
    audio.play();
  }

  componentDidMount() {
    this.sound(soundFile);
    this.play();
  }

  componentWillUnmount() {
    this.stop();
  }

  sound(src) {
    this.sound = document.createElement('audio');
    this.sound.src = src;
    this.sound.setAttribute('preload', 'auto');
    this.sound.setAttribute('controls', 'none');
    this.sound.style.display = 'none';
    document.body.appendChild(this.sound);
  }
  play = function() {
    this.sound.play();
  };
  stop = function() {
    this.sound.pause();
  };
  render() {
    return <div />;
  }
}

export default GameSound;
