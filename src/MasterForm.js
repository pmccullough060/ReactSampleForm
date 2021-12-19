import React from 'react';
import Details from './Details.js';
import Qualifications from './Qualifications';
import WorkExperience from './WorkExperience';
import Progress from './Progress.js';

class MasterForm extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            currentStep: 1,
            email: '',
            username: '',
            password: '',
            qualifications : [],
            experiences: []
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

    //Updating the Qualification items - could we roll these into one method?

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

    //Updating the experience objects - could we roll these into one method?

    addExperience = (experience) => {
        const { experiences } = this.state;
        this.setState({experiences: [...experiences, experience]});
    }

    removeExperience = (experience)=> {
        const { experiences } = this.state;
        this.setState({experiences: experiences.filter(_experience => _experience !== experience)});
    }

    updateExperience = (initialExperience, experience) => {
        const { experiences } = this.state;
        var updatedExperiences = experiences.filter(_experience => _experience !== initialExperience);
        updatedExperiences.push(experience);
        this.setState({experiences: updatedExperiences});
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
            <div>
                <h1>Sample Form!</h1>

                <Progress
                    currentStep={this.state.currentStep}/>
                
                <form onSubmit={ this.handleSubmit }>

                    <Details
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange} //might get rid!
                        email={this.state.email}
                        next={this.next}/>

                    <Qualifications
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange} //might get rid!
                        addQualification={this.addQualification}
                        removeQualification={this.removeQualification}
                        updateQualification={this.updateQualification}
                        qualifications ={this.state.qualifications}
                        next={this.next}
                        prev={this.prev}/>

                    <WorkExperience
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange} //might get rid!
                        removeExperience={this.removeQualification}
                        updateExperience={this.updateExperience}
                        experiences={this.state.experiences}
                        prev={this.prev}/>
                </form>
            </div>
        )
    }
}

export default MasterForm;