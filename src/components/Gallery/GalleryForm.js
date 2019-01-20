import React, {Component} from 'react';
import axios from 'axios';
import UploadBtn from './UploadBtn.js'
import TexFiled from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles';

// for styling 
const styles = them => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap'
    }
})

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
        const {classes} = this.props;
        return (
            <form className={classes.container} onSubmit={this.addImage}>
                <TexFiled 
                    onChange={this.handleImageUrl} 
                    type="text"
                    variant="outlined"
                    label = "Enter image url"
                    margin="normal"
                />
                    
                <TexFiled 
                    onChange={this.handleImageDescription} 
                    type="text"
                    variant="outlined"
                    margin="normal"
                    label="Enter Description"
                    multiline
                    rows="8" 
                />
                <UploadBtn />
            </form>
        );
    }
}

export default withStyles(styles) (GalleryForm);