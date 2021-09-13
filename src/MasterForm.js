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
        this._next = this._next.bind(this);
        this._prev = this._prev.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [ name ] : value
        })
    }

    addQualification = () => {
        const { qualifications } = this.state;
        const qualification = {
            name: 'engineering',
            grade: 'A'
        }
        this.setState({qualifications: [...qualifications, qualification]});
    }

    removeQualification = (qualification) => {
        //remove the qualification from the list.
    }

    _next(){
        let currentStep = this.state.currentStep;
        //TODO: Add an if statement here:
        this.setState({
            currentStep: currentStep + 1
        });
    }

    _prev(){
        let currentStep = this.state.currentStep;
        //TODO: Add an if statement here to stop negative numbers:
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

    //Using properties:
    get previousButton(){
        let currentStep = this.state.currentStep;
        if(currentStep !== 1){
            return(
            <Button
                className="btn btn-secondary"
                type="button"
                onClick={this._prev}>Previous</Button>)
        }
        else{
            return null;
        }
    }

    get nextButton(){
        let currentStep = this.state.currentStep;
        if(currentStep < 3){
            return(
                <Button
                    className="btn btn-primary float-right"
                    variant="contained"
                    color="primary"
                    onClick={this._next}>Next</Button>
            )
        }
        else{
            return null;
        }
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
                        email={this.state.email}/>

                    <Qualifications
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        addQualification={this.addQualification}
                        qualifications ={this.state.qualifications}/>

                    {this.previousButton}
                    {this.nextButton}

                </form>

            </React.Fragment>
        )
    }
}

export default MasterForm;