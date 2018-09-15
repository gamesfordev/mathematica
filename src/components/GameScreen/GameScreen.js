import React, { Component } from 'react';
import './GameScreen.css';
import GameArea from './GameArea/GameArea';
import Grid from "@material-ui/core/es/Grid/Grid";
import Paper from "@material-ui/core/es/Paper/Paper";
import AppBar from "@material-ui/core/es/AppBar/AppBar";
import Toolbar from "@material-ui/core/es/Toolbar/Toolbar";
import Typography from "@material-ui/core/es/Typography/Typography";

class GameScreen extends Component {

    user='John Doe';
    constructor(){
        super();
        this.state={
            gameScreenHeight: 0,
            score:0,
            chances:10
        }

    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions);
    }

    updateDimensions = ()=>{
        const gameScreenHeight =( document.querySelectorAll('.game')[0].clientHeight/2)-22;
        this.setState({gameScreenHeight: gameScreenHeight})
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
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
                  <Paper className="game" >
                      <GameArea></GameArea>
                  </Paper>
              </Grid>
              <Grid item xs={3} className="right-screen">
                  <Paper className="score" style={{height:this.state.gameScreenHeight}}>
                      <h4>Score</h4>
                       <div className="count">
                           {this.state.score}
                       </div>
                  </Paper>
                  <Paper className="chances" style={{height:this.state.gameScreenHeight}}>
                      <h4>Chances</h4>
                      <div className="count">
                          {this.state.chances}
                      </div>
                  </Paper>
              </Grid>

          </Grid>


      </div>
    );
  }
}

export default GameScreen;
