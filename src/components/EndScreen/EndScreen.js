import React, { Component } from 'react';
import './EndScreen.css';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

class EndScreen extends Component {
  render() {
    return (
      <div className="EndScreen">
        <h1 className="title"> Game Title </h1>
        <Grid container spacing={2} justify="center">
          <Grid item md={8}>
            <Grid item md={12} className="main-box">
              <h1>Winner message</h1>
            </Grid>
            <Grid item md={12} className="main-box">
              <Grid item md={12}>
                <h1>Highe scores</h1>
              </Grid>
              <Grid item md={12}>
                {[1, 2, 3].map(i => (
                  <Card className="winner-item">
                    <CardContent>
                      <h2> Name {i}</h2>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">
                        View
                      </Button>
                    </CardActions>
                  </Card>
                ))}
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={4} className="main-box" justify="center">
            <Grid item md={12} className="button">
              <Button variant="contained" color="primary">
                Share
              </Button>
            </Grid>
            <Grid item md={12} className="button">
              <Button variant="contained" color="primary">
                Play Again
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default EndScreen;
