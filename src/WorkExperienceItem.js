import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import { ListItem } from '@material-ui/core';
import { School, Work, DateRange, Delete, Edit } from "@material-ui/icons"

const useStyles = theme => ({
    innerListItem: {
        margin: 'auto',
        width: '100%',
        backgroundColor: '#FEFBF3',
        borderRadius: '5px',
        boxShadow: '2px 2px 10px #3A3b3c'
    },
    icon: {
        marginTop: '5px',
        marginLeft: '5px'
    },
    employerTitle: {
        marginTop: '5px',
        marginLeft: '5px',
        marginBottom: '2px',
        fontWeight: 600,
        fontSize: '18px'
    },
    jobRoleTitle: {
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

class WorkExperienceItem extends React.Component {

    render() {
        const { classes, experience, removeExperience } = this.props;

        console.log(experience);

        return (
            <ListItem>
                <div className={classes.innerListItem}>

                    <div className={classes.formRow}>
                        <div className={classes.formRow}>
                            <Work className={classes.icon} />
                            <p className={classes.employerTitle}>{experience.employer}</p>
                        </div>

                        <div className={classes.formRowButton}>
                            <Edit className={classes.icon}
                                onClick={() => this.props.editExperience(experience)} />
                            <Delete className={classes.icon}
                                onClick={() => this.props.removeExperience(experience)} />
                        </div>
                    </div>

                    <div className={classes.formRow}>
                        <School className={classes.icon}/>
                        <p className={classes.jobRoleTitle}>{experience.jobTitle}</p>
                    </div>

                    <div className={classes.formRow}>
                        <DateRange className={classes.icon} />
                        <p className={classes.date}>{experience.start}</p>
                        <p className={classes.date}>-</p>
                        <p className={classes.date}>{experience.end}</p>
                    </div>

                    <div>
                    <p className={classes.jobRoleTitle}>{experience.description}</p>
                    </div>

                </div>
            </ListItem>
        )
    };
}

export default withStyles(useStyles)(WorkExperienceItem);