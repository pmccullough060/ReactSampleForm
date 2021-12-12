import React from 'react';
import Details from './Details.js';
import Qualifications from './Qualifications';
import WorkExperience from './WorkExperience';
import { Button } from '@material-ui/core';
import Progress from './Progress.js';

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
        const { qualifications } = this.state;
        this.setState({qualifications: [...qualifications, qualification]});
    }

    removeQualification = (qualification) => {
        const { qualifications } = this.state;
        this.setState({qualifications: qualifications.filter(_qualification => _qualification !== qualification)});
    }

    updateQualification = (initialQualification, qualification) => {
        const { qualifications } = this.state;
        var updatedQualifications = qualifications.filter(_qualification => _qualification !== initialQualification);
        updatedQualifications.push(qualification);
        this.setState({qualifications: updatedQualifications});
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

    //we need to have react component for progress.

    render(){
        return(
            <div>
                <h1>Sample Form!</h1>

                <Progress
                    currentStep={this.state.currentStep}/>
                
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
                        updateQualification={this.updateQualification}
                        qualifications ={this.state.qualifications}
                        next={this.next}
                        prev={this.prev}/>

                    <WorkExperience
                        currentStep={this.state.currentStep}
                        prev={this.prev}/>
                </form>

            </div>
        )
    }
}

export default MasterForm;