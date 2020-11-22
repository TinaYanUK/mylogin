import React, { Component, Fragment } from 'react';
import { AppBar, Typography} from '@material-ui/core';


export default class Confirm extends Component {
    
    render() {
        return (
            <Fragment>
            <AppBar position="static">
              <Typography variant="h6" >
                Confirm User Data
              </Typography>
             </AppBar>  
             <br/>
             <Typography variant="h4" >
             Thank you for submitting your user details!
             </Typography> 
            </Fragment>
        )
    }
}
