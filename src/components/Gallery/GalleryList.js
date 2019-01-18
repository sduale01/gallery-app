import React, {Component} from 'react';

class GalleryList extends Component {
      appendImagesToPage = () => {
    let imagesArr = [];
    for (let i = 0; i < this.props.photoGallery.length; i++) {
      const createImage = this.props.photoGallery[i];
      const createRow = (<tr key={i}>
                          <td><img src={createImage.path} alt="white goat"/></td>
                          <td>{createImage.description}</td>
                          <td>{createImage.likes}</td>
                        </tr>)
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
        )
    }
}

export default GalleryList;