import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './StartScreen.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
class StartScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };
  }

  addName(event) {
    this.setState({
      username: event.target.value
    });
    window.localStorage.setItem('username', event.target.value);
  }

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
                  margin="normal"
                  value={this.state.username}
                  className="user_name"
                  onChange={e => this.addName(e)}
                />
                <Link to={'/game/' + this.state.username}>
                  <Button variant="contained" color="primary" className="">
                    Login
                  </Button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StartScreen;
