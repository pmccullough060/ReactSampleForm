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
            editMode: false
        }
    }

    //the "ADD NEW button changes the editMode state to true"
    //this then shows the QualificationItemEdit component
    //this persists the Qualification as state until the user submits it or cancels it.

    leaveEditMode = () => {
        this.setState({ editMode: false });
    }

    render() {
        const { qualifications, classes } = this.props;

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
                            onClick={() => this.setState({ editMode: true })}>Add New
                        </Button>

                        <List>
                            {
                                qualifications.map((_qualification, _index) => {
                                    return (
                                        <div key={_index}>
                                            <QualificationItem qualification={_qualification} />
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
                    addQualification={this.props.addQualification}
                    leaveEditMode={this.leaveEditMode} />
            )
        };
    }
}

export default withStyles(useStyles)(Qualifications);