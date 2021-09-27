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

class QualificationItemEdit extends React.Component {

    constructor(props){
        super(props)

        const { qualification } = this.props;

        //A qualification is passed into this view model
        //We can then change its state
        //We it comes times to submit the view model we use the addQualification(qualification) method passed into the view model.
        //This will either update the state of the existing qualification or add a new qualification.

        if(qualification == null){

            //If the qualification is null we create our own instance of a qualification object.
            this.state = { qualification : { 
                institution : '',
                start : '',
                end : '',
                name : '',
                grade : ''
                } 
             }

        }
        else{
            this.state = { qualification : qualification }
        }
    }

    submit = () => {

        this.props.addQualification(this.state.qualification);

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
                        value = {this.state.qualification.institution}

                        onChange= { e => this.setState({ 
                            qualification : {
                                ...this.state.qualification, 
                                "institution" : e.target.value
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
                        onChange={ e => this.setState({start : e.target.value }) }/>

                    <TextField
                        className={classes.textField}
                        placeholder="End date"
                        variant="outlined"
                        type="date" 
                        onChange={ e => this.setState({end : e.target.value }) }/>
                </div>

                <div className={classes.formRow}>
                    <TextField
                        className={classes.textField}
                        placeholder="Qualification" 
                        variant="outlined"
                        onChange={ e => this.setState({name : e.target.value }) }/>

                    <TextField
                        className={classes.textField}
                        placeholder="Grade"
                        variant="outlined" 
                        onChange={ e => this.setState({grade : e.target.value }) }/>
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