import './Qualifications.css';
import QualificationItem from './QualificationItem.js'
import React from 'react';
import { Button, Box, List } from '@material-ui/core';

class Qualifications extends React.Component {

    render() {

        const { qualifications } = this.props;

        if (this.props.currentStep !== 2) {
            return null;
        }
        else {
            return (
                <div className="formGroup">

                    <h2 className="title">Qualifications</h2>

                    <Box m={2}>
                        <Button
                            className="buttonMain"
                            variant="contained"
                            color="primary"
                            onClick={this.props.addQualification}>Add New
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
    }
}

export default Qualifications;