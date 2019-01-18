import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

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

  
  appendImagesToPage = () => {
    let imagesArr = [];
    for (let i = 0; i < this.state.photoGallery.length; i++) {
      const createImage = this.state.photoGallery[i];
      const createRow = (<tr>
                          <td><img src={createImage.path}/></td>
                          <td>{createImage.description}</td>
                          <td>{createImage.likes}</td>
                        </tr>)
      imagesArr.push(createRow);
      
    }
    return imagesArr;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <table>
          <tbody>
            {this.appendImagesToPage()}
          </tbody>
        </table>
        
        {/* <img src="images/goat_small.jpg"/> */}
      </div>
    );
  }
}

export default App;
