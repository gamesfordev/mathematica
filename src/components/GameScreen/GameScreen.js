import React, { Component } from 'react';
import './GameScreen.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class GameScreen extends Component {
  render() {
    return (
      <div className="GameScreen">
        <div className="master">
          <div className="login_box">
            <div className="logo">
              <img src="" />
            </div>
            <div className="name">
              <form className="loginForm"> 
              <TextField
                id="name"
                label="Your Name"
                value=""
                margin="normal"
                className="user_name"
              />
              <Button variant="contained" color="primary" className="">
                Login
              </Button>

              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GameScreen;
