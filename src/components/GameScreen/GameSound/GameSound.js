import React, { Component } from 'react';
import soundFile from '../bgmusic.mp3';

class GameSound extends Component {
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
