import React, { Component, Fragment } from 'react';
import { AppBar, Typography, TextField, Button } from '@material-ui/core';

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep()
  }

    render() {
      const {  handleChange } =  this.props;

        return (
         <Fragment>
            <AppBar position="static">
             <Typography variant="h6" >
               Enter User Details
             </Typography>
            </AppBar>
            <br/>
            <form>
             <TextField 
             label="First Name" 
             onChange={handleChange('firstName')}
             />
      
             <br/>
             <TextField 
             label="Last Name"
             onChange={handleChange('lastName')} 
             />
             <br/>
             <TextField 
             label="Email"
             onChange={handleChange('email')}
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
            </form>
          </Fragment>
          
        )
    }
}

export default FormUserDetails

