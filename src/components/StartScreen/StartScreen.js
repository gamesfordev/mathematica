import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './StartScreen.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
class StartScreen extends Component {
  render() {
    return (
      <div className="StartScreen">
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
              <Link to="/game"><Button variant="contained" color="primary" className="">
                Login
              </Button></Link>

              </form>
            </div>
          </div>
        </div>        
      </div>
    );
  }
}



export default StartScreen;
