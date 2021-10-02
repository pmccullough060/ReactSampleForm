import './Qualifications.css';
import QualificationItem from './QualificationItem.js';
import QualificationItemEdit from './QualificationItemEdit';
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

class Qualifications extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            editMode: false,
            selectedQualification: null
        }
    }

    leaveEditMode = () => {
        this.setState({ editMode: false });
    }

    //Review whether we need to call set state twice.....
    editQualification = (qualification) => {        
        this.setState({ selectedQualification: qualification, editMode: true });
    }

    render() {
        const { qualifications, classes, removeQualification, addQualification } = this.props;

        if (this.props.currentStep !== 2) {
            return null;
        }

        else if (this.state.editMode === false) {
            return (
                <div>
                    <div className={classes.formGroup}>

                        <h2>Qualifications</h2>

                        <Button
                            className="buttonMain"
                            variant="contained"
                            color="primary"
                            onClick={ () => this.setState({ editMode: true, selectedQualification: null})}>Add New
                        </Button>

                        <List>
                            {
                                qualifications.map((_qualification, _index) => {
                                    return (
                                        <div key={ _index }>
                                            <QualificationItem qualification={ _qualification } 
                                                               editQualification = { this.editQualification }
                                                               removeQualification = { removeQualification }/>
                                        </div>
                                    )
                                })
                            }
                        </List>
                    </div>

                    <div className={classes.buttonContainer}>
                        <Button
                            className={classes.buttonNext}
                            type="button"
                            variant='contained'
                            color="primary"
                            onClick={this.props.next}>Next</Button>

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
                <QualificationItemEdit
                    qualification = {this.state.selectedQualification}
                    removeQualification = { removeQualification }
                    addQualification={ addQualification }
                    leaveEditMode={this.leaveEditMode} />
            )
        };
    }
}

export default withStyles(useStyles)(Qualifications);