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

        this.state = {
            institution : '',
            start : '',
            end : '',
            name : '',
            grade : ''
        }
    }

    submit = () => {

        const qualification = {
            institution : this.state.institution,
            start : this.state.start,
            end : this.state.end,
            name : this.state.name,
            grade : this.state.grade
        }

        this.props.addQualification(qualification);
        
        //temp
        console.log(qualification);

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
                        onChange={ e => this.setState({ institution : e.target.value }) }/>
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