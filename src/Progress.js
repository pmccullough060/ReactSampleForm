import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import { ListItem, ListItemText } from '@material-ui/core';
import { School, Work, DateRange, Delete, Edit, CallMissedSharp } from "@material-ui/icons"

//Inject some CSS into the DOM
const useStyles = theme => ({
    
    container:{
        display: 'flex',
        justifyContent: 'center'
    },
    body: {
        margin: '20px',
        height: '50px',
        width: '50%',
        maxWidth: '800px',
        backgroundColor: '#EDECE8',
        borderRadius: '10px',
        boxShadow: '2px 2px 15px #3A3b3c'
    }
});

class Progress extends React.Component {

    render(){
        const { classes, currentStep } = this.props;
        return(
            <div className={classes.container}>
                <div className={classes.body}>
                    Step { currentStep }
                </div>
            </div>
            )
        
    }
}
export default withStyles(useStyles)(Progress);