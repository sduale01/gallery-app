import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from './../Gallery/GalleryList.js'

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


  refreshGallery = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    }).then(response => {
      console.log('response from server is:', response.data);
      this.setState({
        photoGallery: response.data
      })
    })
  }

  


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <GalleryList photoGallery={this.state.photoGallery}/>
        
        {/* <img src="images/goat_small.jpg"/> */}
      </div>
    );
  }
}

export default App;
