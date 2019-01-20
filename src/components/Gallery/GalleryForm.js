import React, {Component} from 'react';
import axios from 'axios';
import UploadBtn from './UploadBtn.js'

class GalleryForm extends Component {
    constructor() {
        super();

        this.state = {
            imageUrl: '',
            imageDescription: ''
        }
    }

    // Grab what is inside of the image url input field
    handleImageUrl = (event) => {
        this.setState({
            imageUrl: event.target.value
        }); 
    }

    // Grab what is inside of the image description filed
    handleImageDescription = (event => {
        this.setState({
            imageDescription: event.target.value
        })
        
    })

    // Add image to page and db
    addImage = (event) => {
        event.preventDefault();

        const imageData = {
            imageUrl: this.state.imageUrl,
            imageDescription: this.state.imageDescription
        }
        axios({
            method: 'POST',
            url: '/gallery',
            data: imageData
        }).then(response => {
            this.props.refreshGallery();
        }).catch(error => {
            alert('Error in POST')
        })
        
        
    }
    render() {
        return (
            <form onSubmit={this.addImage}>
                <input onChange={this.handleImageUrl} type="text" placeholder="Enter image url" />
                <input onChange={this.handleImageDescription} type="text" placeholder="Enter Description" />
                <UploadBtn />
            </form>
        );
    }
}

export default GalleryForm;