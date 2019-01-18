import React, {Component} from 'react';
import GalleryItem from './GalleryItem.js'

class GalleryList extends Component {
      appendImagesToPage = () => {
    let imagesArr = [];
    for (let i = 0; i < this.props.photoGallery.length; i++) {
      const createImage = this.props.photoGallery[i];
      const createRow = (<GalleryItem createImage={createImage} key={i}/>)
      imagesArr.push(createRow);
      
    }
    return imagesArr;
  }
    render() {
        return (
            <table>
                <thead>

                    <tr>
                    <th>Image</th>
                    <th>Description</th>
                    <th>Likes</th>
                    </tr>
                </thead>
                <tbody>
                    {this.appendImagesToPage()}
                </tbody>
            </table>
        );
    }
}

export default GalleryList;