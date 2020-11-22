import React, { Component, Fragment } from 'react';
import { AppBar, Typography, Button, List, ListItem, ListItemText, Grid} from '@material-ui/core';


export default class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep()
      }

     back = e => {
        e.preventDefault();
        this.props.preStep()
      }

    render() {
        const { 
            values: { firstName, lastName, email, occupation, city, bio } 
        } =  this.props;
        return (
           <Fragment>
           <AppBar position="static">
             <Typography variant="h6" >
               Confirm User Data
             </Typography>
            </AppBar>  

            <Grid container>
                <List style={{margin:'auto'}}>
                   <ListItem>
                      <ListItemText
                        primary="First Name"
                        secondary={firstName}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Last Name"
                        secondary={lastName}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Email"
                        secondary={email}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Occupation"
                        secondary={occupation}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="City"
                        secondary={city}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Bio"
                        secondary={bio}
                      />
                    </ListItem>
                </List>
                </Grid>
               <Button 
                    variant="contained" 
                    color="primary"
                    onClick={this.continue}
                    >
                    Confirm
                </Button>
                <Button 
                    variant="contained"
                    onClick={this.back}
                    style={{margin:10}}
                    >
                    Back
                </Button>
      
        </Fragment>
        )
    }
}
