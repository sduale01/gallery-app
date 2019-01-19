import React, {Component} from 'react';
import axios from 'axios';

class GalleryItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isImage: true,
        }
    }
    // "this " doesnt exist if you dont use arrow functions
    handleColumnClick = () => {
        this.setState({
            isImage: !this.state.isImage,
        });
    }

    // This will update the likes when like btn is clicked
    updateLikes = () => {
        console.log('like clicked');

        axios({
            method: 'PUT',
            url: `/gallery/like/${this.props.createImage.id}`
        }).then(response => {
            this.props.refreshGallery();
        }).catch(error => {
            alert('Error when attempting PUT')
        })
        
    }

    deleteRow = () => {
        console.log('delete clicked');

        axios({
            method: 'DELETE',
            url: `/gallery/${this.props.createImage.id}`
        }).then(response => {
            this.props.refreshGallery();
        }).catch(error => {
            alert('Eror when attempting DELETE')
            
        })

        
    }



    render() {
        const isImage = this.state.isImage;
        let thingToShow;
        if(isImage) {
            thingToShow = <img src={this.props.createImage.path} alt="white goat"/>
        } else {
            thingToShow = <div>{this.props.createImage.description}</div>
        }   
        return (
            <tr key={this.props.i}>
                <td onClick={this.handleColumnClick}>{thingToShow}</td>
                <td>{this.props.createImage.likes}</td>
                <td><button onClick={this.updateLikes}>Like</button></td>
                <td><button onClick={this.deleteRow}>Delete</button></td>
            </tr>
        );
    }
}

export default GalleryItem;