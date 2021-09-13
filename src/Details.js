import './Details.css';
import React from 'react';
import MuiPhoneNumber from 'material-ui-phone-number';
import { Input } from '@material-ui/core';

class Details extends React.Component{

    constructor(props){
        super(props)

        //Assign state here:
    }

    render(){

        if(this.props.currentStep !== 1){
            return null;
        }
        else{
            return(
                <div className="formGroup">
                    <h2 className="title">Personal Details</h2>
                        <div className="formRow">
                            <Input 
                                className="input"
                                id="firstName"
                                name="firstName"
                                type="text"
                                placeholder="First name"
                                value={this.props.firstName}
                                onChange={this.props.handleChange}/>

                            <Input 
                                className="input"
                                id="lastName"
                                name="lastName"
                                type="text"
                                placeholder="Last name"
                                value={this.props.lastName}
                                onChange={this.props.handleChange}/>    
                        </div>

                        <div className="formRow">
                            <Input 
                                className="input"
                                id="birthDate"
                                name="birthDate"
                                type="date"
                                value={this.props.firstName}
                                onChange={this.props.handleChange}/>

                            <Input 
                                className="input"
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Email"
                                value={this.props.email}
                                onChange={this.props.handleChange}/>    
                        </div>

                        <div className="formRow">
                            <MuiPhoneNumber 
                                //css didn't work for some reason :(
                                style={{margin: "10px", width: "50%"}}
                                className="input"
                                id="birthDate"
                                name="birthDate"
                                defaultCountry='gb'
                                regions={'europe'}
                                value={this.props.firstName}/> 
                        </div>
                </div>
            )
        }
    }
}

export default Details;
