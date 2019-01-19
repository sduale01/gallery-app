import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from './../Gallery/GalleryList.js'
import GalleryForm from './../Gallery/GalleryForm.js'

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

  // packageImageData = (imageInfo) => {
  //   axios({
  //     method: 'POST',
  //     url: '/gallery',
  //     data: imageInfo
  //   }).then(response => {
  //     this.refreshGallery();
  //   }).catch(error => {
  //     alert('Error in POST')
  //   })
  // }


  // To display what is on the server on to the DOM
  refreshGallery = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    }).then(response => {
      console.log('response from server is:', response.data);
      this.setState({
        photoGallery: response.data
      })
    }).catch(error => {
      console.log('error in when attempting GET', error);
      alert('error in when attempting GET')
      
    })
  }

  


  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        < GalleryForm refreshGallery={this.refreshGallery}/>
        <br/>
        <GalleryList photoGallery={this.state.photoGallery} refreshGallery={this.refreshGallery}/>
        
        {/* <img src="images/goat_small.jpg"/> */}
      </div>
    );
  }
}

export default App;
