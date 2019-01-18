import React, {Component} from 'react';

class GalleryItem extends Component {
    render() {
        return (
            <tr key={this.props.i}>
                <td><img src={this.props.createImage.path} alt="white goat"/></td>
                <td>{this.props.createImage.description}</td>
                <td>{this.props.createImage.likes}</td>
            </tr>
        );
    }
}

export default GalleryItem;