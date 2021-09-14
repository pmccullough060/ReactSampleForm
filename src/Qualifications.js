import './Qualifications.css';
import QualificationItem from './QualificationItem.js';
import QualificationItemEdit from './QualificationItemEdit';
import React from 'react';
import { Button, Box, List } from '@material-ui/core';

class Qualifications extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            editMode : false
        }
    }

    //the "ADD NEW button changes the editMode state to true"
    //this then shows the QualificationItemEdit component
    //this persists the Qualification as state until the user submits it or cancels it.

    leaveEditMode = () => {
        this.setState({editMode : false});
    }

    render() {

        const { qualifications } = this.props;

        if (this.props.currentStep !== 2) {
            return null;
        }

        else if(this.state.editMode === false) {
            return (
                <div className="formGroup">

                    <h2 className="title">Qualifications</h2>

                    <Box m={2}>
                        <Button
                            className="buttonMain"
                            variant="contained"
                            color="primary"
                            onClick={() => this.setState({editMode : true})}>Add New
                        </Button>
                    </Box>

                    <List>
                        {
                            qualifications.map((_qualification, _index) => {
                                return (
                                    <div key={_index}>
                                        <QualificationItem name={_qualification.name} />
                                    </div>
                                )
                            })
                        }
                    </List>
                </div>
            )
        }

        else{
            return(
                <QualificationItemEdit 
                    addQualification = {this.props.addQualification}
                    leaveEditMode = {this.leaveEditMode}/>
            )
        };
    }
}

export default Qualifications;