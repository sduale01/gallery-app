import React, {Component} from 'react';
import Axios from 'axios';

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

        Axios({
            method: 'PUT',
            url: `/gallery/like/${this.props.createImage.id}`
        }).then(response => {
            this.props.refreshGallery();
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
            </tr>
        );
    }
}

export default GalleryItem;