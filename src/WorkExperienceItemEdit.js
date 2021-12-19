import React from 'react';
import { TextField, Button } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";

const useStyles = theme => ({
    formGroup: {
        margin: 'auto',
        overflow: 'auto',
        maxWidth: '800px',
        width: '50%',
        backgroundColor: '#EDECE8',
        borderRadius: '10px',
        boxShadow: '2px 2px 15px #3A3b3c',
    },
    formRow: {
        margin: '20px',
        display: 'flex',
        justifyContent: 'center',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        backgroundColor: 'white',
        width: '100%'
    },
    button: {
        float: 'right',
        margin: theme.spacing(2)
    }
});

class WorkExperienceItemEdit extends React.Component {

    constructor(props){
        super(props)

        const { experience } = this.props;

        if(experience == null){
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
        else {
            this.state = {
                experience: experience,
                initialExperience: experience
            }
        }
    }

    submit = () => {
        
        this.props.updateExperience(this.state.initialExperience, this.state.experience);

        this.props.leaveEditMode();
    }

    render() {
        const { classes } = this.props;

        return (
            <div className = { classes.formGroup }>
                <h2>Add Experience</h2>
                <p>Please add your work experience below</p>

                <div className={classes.formRow}>
                    <TextField 
                        className = {classes.textField}
                        placeholder="Employer"
                        variant="outlined"
                        value={this.state.experience.employer}
                        onChange={e => this.setState({
                            experience: {
                                ...this.state.experience,
                                employer: e.target.value
                            }
                        })
                        }/>                    
                </div>

                <div className={classes.formRow}>
                    <TextField
                        className={classes.textField}
                        placeholder="Start date"
                        variant="outlined"
                        type="date"
                        value={this.state.experience.start}
                        onChange={e => this.setState({
                            qualification: {
                                ...this.state.qualification,
                                start: e.target.value
                            }
                        })
                        } />

                    <TextField
                        className={classes.textField}
                        placeholder="End date"
                        variant="outlined"
                        type="date"
                        value={this.state.experience.end}
                        onChange={e => this.setState({
                            qualification: {
                                ...this.state.qualification,
                                end: e.target.value
                            }
                        })
                        } />
                </div>

                <div className={classes.formRow}>
                    <Button
                        className={classes.button}
                        variant="contained"
                        onClick={this.props.leaveEditMode}>Cancel</Button>

                    <Button 
                        className={classes.button}
                        variant="contained"
                        color="primary"
                        onClick={this.submit}>Submit</Button>
                </div>
            </div>
        )
    };
}

export default withStyles(useStyles)(WorkExperienceItemEdit);