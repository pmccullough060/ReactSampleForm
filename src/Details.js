import React from 'react';
import MuiPhoneNumber from 'material-ui-phone-number';
import { withStyles } from "@material-ui/core/styles";
import { TextField, Button } from '@material-ui/core';

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
    button: {
        float: 'right',
        marginTop: theme.spacing(2)
    }
});

class Details extends React.Component {

    render() {
        const { classes } = this.props;

        if (this.props.currentStep !== 1) {
            return null;
        }
        else {
            return (
                <div className={classes.root}>
                    <div className={classes.formGroup}>
                        <h2>Personal Details</h2>
                        <div className={classes.formRow}>
                            <TextField
                                className={classes.textField}
                                id="firstName"
                                name="firstName"
                                type="text"
                                placeholder="First name"
                                variant="outlined"
                                value={this.props.firstName}
                                onChange={this.props.handleChange} />

                            <TextField
                                className={classes.textField}
                                id="lastName"
                                name="lastName"
                                type="text"
                                placeholder="Last name"
                                variant="outlined"
                                value={this.props.lastName}
                                onChange={this.props.handleChange} />
                        </div>

                        <div className={classes.formRow}>
                            <TextField
                                className={classes.textField}
                                id="birthDate"
                                name="birthDate"
                                type="date"
                                variant="outlined"
                                value={this.props.firstName}
                                onChange={this.props.handleChange} />

                            <TextField
                                className={classes.textField}
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Email"
                                variant="outlined"
                                value={this.props.email}
                                onChange={this.props.handleChange} />
                        </div>

                        <div className={classes.formRow}>
                            <MuiPhoneNumber
                                //css didn't work for some reason :(
                                style={{ margin: "10px", width: "50%" }}
                                className="input"
                                id="birthDate"
                                name="birthDate"
                                defaultCountry='gb'
                                regions={'europe'}
                                variant="outlined"
                                value={this.props.firstName} />
                        </div>
                    </div>

                    <div className={classes.buttonContainer}>
                        <Button
                            className={classes.button}
                            type="button"
                            variant='contained'
                            color="primary"
                            onClick={this.props.next}>Next</Button>
                    </div>

                </div>


            )
        }
    }
}

export default withStyles(useStyles)(Details);
