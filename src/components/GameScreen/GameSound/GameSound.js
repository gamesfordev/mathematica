import React, { Component } from 'react';
import soundFile from '../../../assets/audio/bgmusic.mp3';
import beepFile from '../../../assets/audio/beep.mp3';
import correctSoundFile from '../../../assets/audio/correct-sound.mp3';
import missedSoundFile from '../../../assets/audio/missed-sound.mp3';
import newelementSoundFile from '../../../assets/audio/newelement-sound.ogg';
import wrongSoundFile from '../../../assets/audio/wrong-sound.mp3';

class GameSound extends Component {
  playEffect(effect) {
    let audio = new Audio(beepFile);
    let correctSound = new Audio(correctSoundFile);
    let missedSound = new Audio(missedSoundFile);
    let newelementSound = new Audio(newelementSoundFile);
    let wrongSound = new Audio(wrongSoundFile);
    switch (effect) {
      case 'correct-sound':
        correctSound.play();
        break;
      case 'wrong-sound':
        wrongSound.play();
        break;
      case 'missed-sound':
        missedSound.play();
        break;
      case 'newelement-sound':
        newelementSound.play();
        break;

      default:
        audio.play();
        break;
    }
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
