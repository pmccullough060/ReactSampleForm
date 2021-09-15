import React from 'react';
import './QualificationItem.css';
import { withStyles } from "@material-ui/core/styles";
import { ListItem, ListItemText } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

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

class QualificationItem extends React.Component {

    render(){
        const { classes, qualification } = this.props;

        return(
            <ListItem className='qualificationItem'>
                <div className='innerListItem'>

                    <h3>{this.props.qualification.institution}</h3>

                    <ListItemText
                        primary={this.props.qualification.institution}/>
                </div>
            </ListItem>
        )
    };
}

export default withStyles(useStyles)(QualificationItem);