import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import { Button, Box, List } from '@material-ui/core';

//Inject some CSS into the DOM:
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
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        backgroundColor: 'white',
        width: '100%'
    },
    buttonContainer: {
        margin: 'auto',
        maxWidth: '800px',
        width: '50%',
    },
    buttonAdd: {
        margin: theme.spacing(2)
    },
    buttonNext: {
        float: 'right',
        marginTop: theme.spacing(2)
    },
    buttonPrev: {
        float: 'left',
        marginTop: theme.spacing(2)
    }
});

class WorkExperience extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            editMode: false,
            selectedExperienced: null
        }
    }

    leaveEditMode = () => {
        this.setState({ editMode: false });
    }

    editExperience = (experience) => {
        this.setState({ selectedExperience: experience, editMode: true });
    }

    render() {
        const { experiences, classes, removeExperience, addExperience, updateExperience, currentStep } = this.props;

        if (currentStep !== 3) {
            return null;
        }
        else if (this.state.editMode == false) {
            return (
                <div>
                    <div className={classes.formGroup}>

                        <h2>Work Experience</h2>

                        <Button
                            className="buttonMain"
                            variant="contained"
                            color="primary"
                            onClick={() => this.setState({ editMode: true, selectedQualification: null })}>Add New
                        </Button>

                        <List>

                        </List>

                    </div>

                    <div className={classes.buttonContainer}>
                        <Button
                            className={classes.buttonPrev}
                            type="button"
                            variant='contained'
                            onClick={this.props.prev}>Prev</Button>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className={classes.formGroup}>
                    <div>Hello! Edit mode true</div>
                </div>
            )
        };
    }
}

export default withStyles(useStyles)(WorkExperience);