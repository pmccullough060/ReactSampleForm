import React from 'react';
import './QualificationItem.css';
import { withStyles } from "@material-ui/core/styles";
import { ListItem, ListItemText } from '@material-ui/core';
import { School, Work, DateRange, Delete, Edit } from "@material-ui/icons"

const useStyles = theme => ({
    icon: {
        marginTop: '5px',
        marginLeft: '5px'
    },
    institutionTitle: {
        marginTop: '5px',
        marginLeft: '5px',
        marginBottom: '2px',
        fontWeight: 600,
        fontSize: '18px'
    },
    qualificationTitle: {
        marginTop: '5px',
        marginLeft: '5px',
        marginBottom: '10px'
    },
    date: {
        marginTop: '5px',
        marginLeft: '5px',
        marginBottom: '2px',
        fontWeight: 500,
        fontSize: '14px'
    },
    formRow: {
        display: 'flex',
        width: '100%'
    },
    formRowButton: {
        display: 'flex'
    },
    button: {
        float: 'right',
        margin: '5px'
    }
});

class QualificationItem extends React.Component {

    render() {
        const { classes, qualification, removeQualification } = this.props;

        return (
            <ListItem className='qualificationItem'>
                <div className='innerListItem'>

                    <div className={classes.formRow}>
                        <div className={classes.formRow}>
                            <Work className={classes.icon} />
                            <p className={classes.institutionTitle}>{this.props.qualification.institution}</p>
                        </div>
                        <div className={classes.formRowButton}>
                            
                            <Edit className={classes.icon} />

                            <Delete className={classes.icon} 
                                    onClick={() => this.props.removeQualification(qualification)}/>
                        </div>

                    </div>

                    <div className={classes.formRow}>
                        <DateRange className={classes.icon} />
                        <p className={classes.date}>{this.props.qualification.start}</p>
                        <p className={classes.date}>-</p>
                        <p className={classes.date}>{this.props.qualification.end}</p>
                    </div>

                    <div className={classes.formRow}>
                        <School className={classes.icon} />
                        <p className={classes.qualificationTitle}>{this.props.qualification.name}</p>
                    </div>
                </div>
            </ListItem>
        )
    };
}

export default withStyles(useStyles)(QualificationItem);