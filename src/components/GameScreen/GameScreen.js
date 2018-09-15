import React, { Component } from 'react';
import './GameScreen.css';
import GameArea from './GameArea/GameArea';
import Grid from '@material-ui/core/es/Grid/Grid';
import Paper from '@material-ui/core/es/Paper/Paper';
import AppBar from '@material-ui/core/es/AppBar/AppBar';
import Toolbar from '@material-ui/core/es/Toolbar/Toolbar';
import Typography from '@material-ui/core/es/Typography/Typography';

class GameScreen extends Component {
  user = window.localStorage.getItem('username');
  maxChances = 3;

  updateChances(chances) {
    this.setState({
      gameScreenHeight: this.state.gameScreenHeight,
      score: this.state.score,
      chances: chances
    });
  }

  updateScore(score) {
    console.log(score);
    window.localStorage.setItem('score', score);
    this.setState({
      gameScreenHeight: this.state.gameScreenHeight,
      score: score,
      chances: this.state.chances
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      gameScreenHeight: 0,
      score: 0,
      chances: 0
    };
  }

  componentDidMount() {
    this.user = this.props.match.params.user;
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions);
  }

  updateDimensions = () => {
    const gameScreenHeight =
      document.querySelectorAll('.game')[0].clientHeight / 2 - 22;
    this.setState({ gameScreenHeight: gameScreenHeight });
  };

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  render() {
    return (
      <div className="GameScreen">
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Mathamatica
            </Typography>
            <span className="user">{this.user}</span>
          </Toolbar>
        </AppBar>

        <Grid container spacing={24} className="container">
          <Grid item xs={9} className="left-screen">
            <Paper className="game" id="gameView">
              <GameArea
                updateChances={this.updateChances.bind(this)}
                updateScore={this.updateScore.bind(this)}
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
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default GameScreen;
