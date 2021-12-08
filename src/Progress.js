import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import { LinearProgress } from '@material-ui/core';

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
    },
    label: {
        margin: '5px',
        fontSize: '18px'
    },
    progress: {
        marginTop: '5px',
        marginLeft: '20px',
        marginRight: '20px'
    }
});

class Progress extends React.Component {

    normalise(value){
        return ((value - 0) * 100) / (3-0);
    }

    render(){
        const { classes, currentStep } = this.props;
        return(
            <div className={classes.container}>
                <div className={classes.body}>
                    <div className={classes.label}>
                        Step { currentStep }
                    </div>
                    <div className={classes.progress}>
                        <LinearProgress variant="determinate" value={ this.normalise(currentStep) }></LinearProgress>
                    </div>
                    
                </div>
            </div>
            )
    }
}
export default withStyles(useStyles)(Progress);