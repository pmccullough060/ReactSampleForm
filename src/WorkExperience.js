import React from 'react';
import WorkExperienceItemEdit from './WorkExperienceItemEdit';
import WorkExperienceItem from './WorkExperienceItem';
import { withStyles } from "@material-ui/core/styles";
import { Button, List } from '@material-ui/core';

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
            selectedExperience: null
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
                            {
                                experiences.map((_experience, _index) => {
                                    return (
                                        <div key={ _index }>
                                            <WorkExperienceItem experience={ _experience }
                                                            editExperience={ this.editExperience }
                                                            removeExperience={ removeExperience }/>
                                        </div>
                                    )
                                })
                            }
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
                <WorkExperienceItemEdit
                    experience={this.state.selectedExperience}
                    removeExperience={removeExperience}
                    addExperience={addExperience}
                    updateExperience={updateExperience}
                    leaveEditMode={this.leaveEditMode} />
            )
        };
    }
}

export default withStyles(useStyles)(WorkExperience);