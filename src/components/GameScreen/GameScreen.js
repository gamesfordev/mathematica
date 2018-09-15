import React, { Component } from 'react';
import './GameScreen.css';
import GameArea from './GameArea/GameArea';
import Grid from "@material-ui/core/es/Grid/Grid";
import Paper from "@material-ui/core/es/Paper/Paper";
import AppBar from "@material-ui/core/es/AppBar/AppBar";
import Toolbar from "@material-ui/core/es/Toolbar/Toolbar";
import Typography from "@material-ui/core/es/Typography/Typography";

class GameScreen extends Component {

    constructor(){
        super();
        this.state={
            gameScreenHeight: 0
        }

    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions);
    }

    updateDimensions = ()=>{
        console.log("ddddddd")
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
gfdfgdfgdf
                      fdgfdg
                      dfgdfg
                  </Paper>
                  <Paper className="chances" style={{height:this.state.gameScreenHeight}}>
                      <h4>Chances</h4>
                      fgdfgd
                      dfgdfg
                      dfg
                  </Paper>
              </Grid>

          </Grid>


      </div>
    );
  }
}

export default GameScreen;
