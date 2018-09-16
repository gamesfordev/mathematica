import React, { Component } from 'react';
import soundFile from '../../../assets/audio/bgmusic.mp3';
import beepFile from '../../../assets/audio/beep.mp3';
import correctSoundFile from '../../../assets/audio/correct-sound.mp3';
import missedSoundFile from '../../../assets/audio/missed-sound.mp3';
import newelementSoundFile from '../../../assets/audio/newelement-sound.ogg';
import wrongSoundFile from '../../../assets/audio/wrong-sound.mp3';

class GameSound extends Component {
  constructor() {
    super();
    this.audio = new Audio(beepFile);
    this.correctSound = new Audio(correctSoundFile);
    this.missedSound = new Audio(missedSoundFile);
    this.wrongSound = new Audio(wrongSoundFile);
    this.newelementSound = new Audio(newelementSoundFile);
  }

  playEffect(effect) {
    switch (effect) {
      case 'correct-sound':
        this.correctSound.play();
        break;
      case 'wrong-sound':
        this.wrongSound.play();
        break;
      case 'missed-sound':
        this.missedSound.play();
        break;
      case 'newelement-sound':
        this.newelementSound.play();
        break;

      default:
        this.audio.play();
        break;
    }
  }

  toggleMusic(music) {
    if (music) {
      this.sound.muted = false;
      this.audio.muted = false;
      this.correctSound.muted = false;
      this.missedSound.muted = false;
      this.wrongSound.muted = false;
      this.newelementSound.muted = false;
    } else {
      this.sound.muted = true;
      this.audio.muted = true;
      this.correctSound.muted = true;
      this.missedSound.muted = true;
      this.wrongSound.muted = true;
      this.newelementSound.muted = true;
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
