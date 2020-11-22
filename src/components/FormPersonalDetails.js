import React, { Component, Fragment } from 'react';
import { AppBar, Typography, TextField, Button } from '@material-ui/core';

export class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep()
      }

     back = e => {
        e.preventDefault();
        this.props.preStep()
      }

    render() {
        const {  handleChange } =  this.props;
        return (
         <Fragment>
            <AppBar position="static">
             <Typography variant="h6" >
               Enter Personal Details
             </Typography>
            </AppBar>
            <br/>
            <form>
             <TextField 
             label="Occupation"
             onChange={handleChange('occupation')}
            />
             <br/>
             <TextField 
             label="City"
             onChange={handleChange('city')}
             />
             <br/>
             <TextField 
             label="Bio" 
             onChange={handleChange('bio')}
             />
             <br/>
             <br/>
             <Button 
             variant="contained" 
             color="primary"
             onClick={this.continue}
             >
              Continue
             </Button>
             <Button 
             variant="contained"
             onClick={this.back}
             style={{margin:10}}
             >
             Back
             </Button>
            </form>
          </Fragment>
        )
    }
}
 

export default FormPersonalDetails
