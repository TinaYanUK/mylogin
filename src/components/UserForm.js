import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails'
import FormPersonalDetails from './FormPersonalDetails'
import Confirm from './Confirm'
import Success from './Success'



export class UserForm extends Component {
    state = {
        step:1,
        firstName:'',
        lastName:'',
        email:'',
        occupation:'',
        city:'',
        bio:''
    }

    //Next Step
    nextStep = () => {
        this.setState({
            step: this.state.step + 1
        })
    }
    
    //Previous Step
    preStep = () => {
        this.setState({
            step: this.state.step - 1
        })
    }

    //Handle Fields Change, all inputs
    handleChange = input => e => {
        this.setState({[input]:e.target.value})
    }

    render() {  
        const { firstName,lastName,email, occupation, city, bio } = this.state;
        const values = { firstName, lastName, email, occupation, city, bio };

        switch(this.state.step) {
            case 1:
                return (
                <FormUserDetails 
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                />
                );
            case 2:
                return (
                <FormPersonalDetails 
                    nextStep={this.nextStep}
                    preStep={this.preStep}
                    handleChange={this.handleChange}
                    values={values}
                />
                );
            case 3:
                return (
                <Confirm 
                    nextStep={this.nextStep}
                    preStep={this.preStep}
                    handleChange={this.handleChange}
                    values={values}
                />
                );
            case 4:
                return (
                <Success
                />
                );
            default:      
        }
    }
}

export default UserForm

