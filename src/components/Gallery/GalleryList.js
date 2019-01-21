import React, {Component} from 'react';
import GalleryItem from './GalleryItem.js'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';

const styles = {
    card: {
        maxWidth: 345,
    }, 
    media: {
        height: 140,
    },
}

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
        const {classes} = this.props;
        return (
            <Card className={classes.card}>
                
                    {this.appendImagesToPage()}
                
            </Card>
            // <table>
            //     <thead>

            //         <tr>
            //         <th>Image</th>
            //         <th>Description</th>
            //         <th>Likes</th>
            //         <th>Delete</th>
            //         </tr>
            //     </thead>
            //     <tbody>
            //         {this.appendImagesToPage()}
            //     </tbody>
            // </table>

        );
    }
}

export default withStyles(styles) (GalleryList);