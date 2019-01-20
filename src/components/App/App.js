import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from './../Gallery/GalleryList.js'
import GalleryForm from './../Gallery/GalleryForm.js'
import {withStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

const styles = theme => ({
      root: {
        flexGrow: 1
      },
      paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary
      }
    });


class App extends Component {
  constructor() {
    super();

    this.state = {
      photoGallery: []
    }
  }

  componentDidMount() {
    this.refreshGallery();
  }

  // To display what is on the server on to the DOM
  refreshGallery = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    }).then(response => {
      // console.log('response from server is:', response.data);
      this.setState({
        photoGallery: response.data
      })
    }).catch(error => {
      console.log('error in when attempting GET', error);
      alert('error in when attempting GET')
      
    })
  }

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Gallery of My Life</Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <GalleryList photoGallery={this.state.photoGallery} refreshGallery={this.refreshGallery}/>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            < GalleryForm refreshGallery={this.refreshGallery}/>
          </Paper>
        </Grid>
      </Grid>
        
        
        {/* <img src="images/goat_small.jpg"/> */}
      </div>
    );
  }
}

export default withStyles(styles) (App);
