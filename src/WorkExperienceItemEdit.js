import React from 'react';
import { TextField, Button } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";

const useStyles = theme => ({

});

class WorkExperienceItemEdit extends React.Component {

    constructor(props){
        super(props)

        const { workExperience } = this.props;

        if(workExperience == null){
            this.state = {
                experience: {
                    employer: '',
                    jobTitle: '',
                    start:'',
                    end:'',
                    description:''
                }
            }
        }
    }
}