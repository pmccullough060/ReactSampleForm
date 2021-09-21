import React from 'react';
import Details from './Details.js';
import Qualifications from './Qualifications';
import { Button } from '@material-ui/core';

class MasterForm extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            currentStep: 1,
            email: '',
            username: '',
            password: '',
            qualifications : []
        }

        //allows method to access this classes props and state.
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [ name ] : value
        })
    }

    addQualification = (qualification) => {

        //if the qualification doesn't exist add it else update the existing.

        const { qualifications } = this.state;
        this.setState({qualifications: [...qualifications, qualification]});
    }

    removeQualification = (qualification) => {
        //removing the passed in note from qualifications:
        const { qualifications } = this.state;
        this.setState({qualifications: qualifications.filter(_qualification => _qualification !== qualification)});
    }

    next = () => {
        let currentStep = this.state.currentStep;
        this.setState({
            currentStep: currentStep + 1
        });
    }

    prev = () => {
        let currentStep = this.state.currentStep;
        this.setState({
            currentStep: currentStep - 1
        });
    }

    //trigger an alert on form submission:
    handleSubmit = (event) => {
        event.preventDefault();

        const { email, username, password } = this.state;

        alert(`Your registration detail: \n 
              Email: ${email} \n 
              Username: ${username} \n
              Password: ${password}`);
    }

    render(){
        return(
            <React.Fragment>
                <h1>Sample Form!</h1>

                Step { this.state.currentStep }

                <form onSubmit={ this.handleSubmit }>

                    <Details
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        email={this.state.email}
                        next={this.next}/>

                    <Qualifications
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        addQualification={this.addQualification}
                        removeQualification={this.removeQualification}
                        qualifications ={this.state.qualifications}
                        next={this.next}
                        prev={this.prev}/>

                </form>

            </React.Fragment>
        )
    }
}

export default MasterForm;