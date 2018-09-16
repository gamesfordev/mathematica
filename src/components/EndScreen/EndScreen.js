import React, { Component } from 'react';
import './EndScreen.css';
import Grid from '@material-ui/core/Grid';
import Paper from "@material-ui/core/Paper/Paper";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';
import fire from '../../fire';

import badgeImg from '../../assets/img/badge.png';
import logoImg from '../../assets/img/logo-up.png';

class EndScreen extends Component {
  loading = true;

  constructor(){
    super();


    this.state = {
      score: localStorage.getItem('score'),
      players: [],
      username: window.localStorage.getItem('username'),
      rowsPerPage: 10,
      page: 0
    };
  }

  componentDidMount() {
    this.loading = true;
    this.state = {
      score: localStorage.getItem('score'),
      players: [],
      username: window.localStorage.getItem('username'),
      rowsPerPage: 10,
      page: 0
    };
    let dbRef = fire.orderByChild('score');
    dbRef.on('value', snapshot => {
      if (snapshot.exists()) {
          const players = Object.values(snapshot.val())
              .sort((a, b) => b.score - a.score);
          this.loading = false;
          this.setState({
              players: players
          });
      }
    });
    this.share = this.share.bind(this);
    this.url = window.location.href;
  }

  share() {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${this.url}`,
      'pop',
      'width=600, height=400, scrollbars=no'
    );
  }

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  componentWillUnmount() {
    this.loading = true;
  }

  render() {
    return (
      <div className="EndScreen">
        <h1 className="title"> <img src={logoImg}/></h1>

        <Grid container spacing={24} className="container">

          <Grid item xs={9} className="left-screen">
            <Paper id="leaderbrd" >

              <Table >
                <TableHead>
                  <TableRow>
                    <TableCell>Player</TableCell>
                    <TableCell numeric>Score</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.loading ? <TableCell className="loading" colSpan={2}>Loading Scores...</TableCell> : null}
                  {this.state.players.slice(this.state.page * this.state.rowsPerPage, this.state.page * this.state.rowsPerPage + this.state.rowsPerPage).map(row => {
                    return (
                      <TableRow key={row.id} className={this.state.username == row.user ? 'current-user' : ''}>

                        <TableCell>{row.user}</TableCell>
                        <TableCell numeric>{row.score}</TableCell>

                      </TableRow>
                    );
                  })}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TablePagination
                      colSpan={2}
                      count={this.state.players.length}
                      rowsPerPage={this.state.rowsPerPage}
                      page={this.state.page}
                      onChangePage={this.handleChangePage}
                      onChangeRowsPerPage={this.handleChangeRowsPerPage}

                    />
                  </TableRow>
                </TableFooter>
              </Table>

            </Paper>
          </Grid>
          <Grid item xs={3} className="right-screen">
            <Paper style={{ padding: "20px" }}>
              <div id="congratz">
                <h2>Congratulations...!!!</h2>
                <h3>You have scored {this.state.score}</h3>
                <img src= {badgeImg}/>


              </div>

              <Button variant="contained" color="primary" onClick={this.share} className="btn">
                Share
                      </Button>


              <Link
                to={this.state.username ? `/game/${this.state.username}` : `/`}
              >
                <Button variant="contained" color="primary" className="btn">
                  {this.state.username ? 'Play Again' : 'Play'}
                </Button>
              </Link>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default EndScreen;
