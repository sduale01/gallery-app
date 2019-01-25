import React, {Component} from 'react';
import GalleryItem from './GalleryItem.js'



class GalleryList extends Component {
      appendImagesToPage = () => {
    let imagesArr = [];
    for (let i = 0; i < this.props.photoGallery.length; i++) {
      const createImage = this.props.photoGallery[i];
      const createRow = (<GalleryItem createImage={createImage} key={i} refreshGallery={this.props.refreshGallery}/>)
      imagesArr.push(createRow);
      
    }
    return imagesArr;
  }
    render() {
        return (
            <div>
                {this.appendImagesToPage()}
            </div>
            

        );
    }
}

export default GalleryList;