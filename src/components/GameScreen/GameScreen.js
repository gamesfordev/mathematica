import React, { Component } from 'react';
import './GameScreen.css';
import GameArea from './GameArea/GameArea';
import Grid from '@material-ui/core/Grid/Grid';
import Paper from '@material-ui/core/Paper/Paper';
import AppBar from '@material-ui/core/AppBar/AppBar';
import Toolbar from '@material-ui/core/Toolbar/Toolbar';
import Typography from '@material-ui/core/Typography/Typography';
import GameSound from './GameSound/GameSound';
import logoTrans from '../../assets/img/logo-trans.png';

class GameScreen extends Component {
  user = '';
  maxChances = 3;

  flashImage() {
    this.setState({
      gameScreenHeight: this.state.gameScreenHeight,
      score: this.state.score,
      chances: this.state.chances,
      buffer: this.state.buffer,
      cls: 'game game-anim'
    });
    setTimeout(() => {
      this.setState({
        gameScreenHeight: this.state.gameScreenHeight,
        score: this.state.score,
        chances: this.state.chances,
        buffer: this.state.buffer,
        cls: 'game'
      });
    }, 500);
  }

  updateChances(chances) {
    this.setState({
      gameScreenHeight: this.state.gameScreenHeight,
      score: this.state.score,
      chances: chances,
      buffer: this.state.buffer,
      cls: this.state.cls
    });
  }

  updateBuffer(buffer) {
    this.setState({
      gameScreenHeight: this.state.gameScreenHeight,
      score: this.state.score,
      chances: this.state.chances,
      buffer: buffer,
      cls: this.state.cls
    });
  }

  updateScore(score) {
    console.log(score);
    this.setState({
      gameScreenHeight: this.state.gameScreenHeight,
      score: score,
      chances: this.state.chances,
      buffer: this.buffer,
      cls: this.state.cls
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      gameScreenHeight: 0,
      score: 0,
      chances: 0,
      buffer: '',
      cls: 'game'
    };
  }

  componentDidMount() {
    this.user = this.props.match.params.user;
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions);
    localStorage.setItem('username', this.user);
  }

  updateDimensions = () => {
    const gameScreenHeight =
      document.querySelectorAll('.game')[0].clientHeight / 2 - 22;
    this.setState({ gameScreenHeight: gameScreenHeight });
  };

  componentWillUnmount() {
   window.removeEventListener('resize', this.updateDimensions);
  }

  playEffect(effect) {
    if(this.child)
      this.child.playEffect(effect);
  }

  render() {
    return (
      <div className="GameScreen">
        <GameSound ref={instance => { this.child = instance; }} />
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="title" color="inherit">
              <img src={logoTrans} />
            </Typography>
            <span className="user">{this.user}</span>
          </Toolbar>
        </AppBar>

        <Grid container spacing={24} className="container">
          <Grid item xs={9} className="left-screen">
            <Paper className={this.state.cls} id="gameView">
              <GameArea
                updateChances={this.updateChances.bind(this)}
                updateScore={this.updateScore.bind(this)}
                updateBuffer={this.updateBuffer.bind(this)}
                flashImage={this.flashImage.bind(this)}
                playEffect={this.playEffect.bind(this)}
                user={this.user}
              />
            </Paper>
          </Grid>
          <Grid item xs={3} className="right-screen">
            <Paper
              className="score"
              style={{ height: this.state.gameScreenHeight }}
            >
              <h4>Score</h4>
              <div className="count">{this.state.score}</div>
            </Paper>
            <Paper
              className="chances"
              style={{ height: this.state.gameScreenHeight }}
            >
              <h4>Chances</h4>
              <div className="count">
                {this.state.chances} / {this.maxChances}
              </div>
              <div className="buffer">
                <span>
                  Ans : <span className="ans">{this.state.buffer}</span>
                </span>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default GameScreen;
