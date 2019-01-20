import React, {Component} from 'react';
import Button from '@material-ui/core/Button'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import {withStyles} from '@material-ui/core/styles'


const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    }
    });



class UploadBtn extends Component {
    
    
    render() {

        const {classes} = this.props;
        return (
            <Button className={classes.button} variant="contained" color="default" type="submit">
                Upload
                < CloudUploadIcon className={classes.rightIcon} />
            </Button>
        )
    }
}

export default withStyles(styles) (UploadBtn);