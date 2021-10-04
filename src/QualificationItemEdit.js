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

//https://itnext.io/updating-properties-of-an-object-in-react-state-af6260d8e9f5

class QualificationItemEdit extends React.Component {

    constructor(props) {
        super(props)

        const { qualification } = this.props;

        if (qualification == null) {
            this.state = {
                qualification: {
                    institution: '',
                    start: '',
                    end: '',
                    name: '',
                    grade: ''
                }
            }
        }
        else {
            this.state = { 
                qualification: qualification,
                initialQualification: qualification }
        }
    }

    submit = () => {

        //this.props.removeQualification(this.state.initialQualification);

        this.props.updateQualification(this.state.initialQualification, this.state.qualification);

        //this.props.addQualification(this.state.qualification);

        this.props.leaveEditMode();
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.formGroup}>
                <h2>Add Qualification</h2>
                <p>Please add your educational achievement below</p>

                <div className={classes.formRow}>
                    <TextField
                        className={classes.textField}
                        placeholder="Name of School/Academic Provider"
                        variant="outlined"
                        value={this.state.qualification.institution}
                        onChange={e => this.setState({
                            qualification: {
                                ...this.state.qualification,
                                institution: e.target.value
                            }
                        })
                        } />
                </div>

                <div className={classes.formRow}>
                    <TextField
                        className={classes.textField}
                        placeholder="Start date"
                        variant="outlined"
                        type="date"
                        value={this.state.qualification.start}
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
                        value={this.state.qualification.end}
                        onChange={e => this.setState({
                            qualification: {
                                ...this.state.qualification,
                                end: e.target.value
                            }
                        })
                        } />
                </div>

                <div className={classes.formRow}>
                    <TextField
                        className={classes.textField}
                        placeholder="Qualification"
                        variant="outlined"
                        value={this.state.qualification.name}
                        onChange={e => this.setState({
                            qualification: {
                                ...this.state.qualification,
                                name: e.target.value
                            }
                        })
                        } />

                    <TextField
                        className={classes.textField}
                        placeholder="Grade"
                        variant="outlined"
                        value={this.state.qualification.grade}
                        onChange={e => this.setState({
                            qualification: {
                                ...this.state.qualification,
                                grade: e.target.value
                            }
                        })
                        } />
                </div>

                <div className={classes.formRow}>
                    <Button
                        className={classes.button}
                        variant="contained"
                        onClick={this.props.leaveEditMode}>Cancel</Button>

                    <Button className={classes.button}
                        variant="contained"
                        color="primary"
                        onClick={this.submit}>Submit</Button>
                </div>
            </div>
        )
    };
}

export default withStyles(useStyles)(QualificationItemEdit);