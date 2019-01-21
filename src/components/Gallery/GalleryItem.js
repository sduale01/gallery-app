import React, {Component} from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import { CardContent, CardMedia, Typography, withStyles } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const styles = {
    media: {
        height: 140,
    }
}

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
        const {classes} = this.props;
        const isImage = this.state.isImage;
        let thingToShow;
        if(isImage) {
            thingToShow = <CardMedia
                className={classes.media} 
                image={this.props.createImage.path} 
                alt="white goat"
                />
        } else {
            thingToShow = <Typography className={classes.media}>{this.props.createImage.description}</Typography>
        }   
        return (
            // <tr key={this.props.i}>
            //     <td onClick={this.handleColumnClick}>{thingToShow}</td>
            //     <td>{this.props.createImage.likes}</td>
            //     <td><button onClick={this.updateLikes}>Like</button></td>
            //     <td><button onClick={this.deleteRow}>Delete</button></td>
            // </tr>
            <CardContent>
                <CardActionArea onClick={this.handleColumnClick}>
                    {thingToShow}
                </CardActionArea>
                <CardActionArea>
                    <CardContent>
                        <Typography>
                            {this.props.createImage.likes}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActionArea>
                    <Button onClick={this.updateLikes} variant="contained" size="small" color="primary">
                        Like
                    </Button>
                    <Button onClick={this.deleteRow} variant="contained" size="small" color="primary">
                        Delete
                    </Button>
                </CardActionArea>

            </CardContent>
        );
    }
}

export default withStyles(styles) (GalleryItem);