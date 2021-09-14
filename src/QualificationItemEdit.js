import React from 'react';
import './QualificationItemEdit.css';
import { Input, Button, Box } from '@material-ui/core';

class QualificationItemEdit extends React.Component {

    submit = () => {
        this.props.addQualification();
        this.props.leaveEditMode();
    };

    render() {
        return (
            <div className='qualificationItemEdit'>
                <h2>Add Qualification</h2>
                <p>Please add your educational achievement below</p>

                <div className='inputRow'>
                    <Input
                        className='input'
                        placeholder="Name of School/Academic Provider" />
                </div>

                <div className='inputRow'>
                    <Input
                        className='input'
                        placeholder="Start date"
                        type="date" />

                    <Input
                        className='input'
                        placeholder="End date"
                        type="date" />
                </div>

                <div className='inputRow'>
                    <Input
                        className='input'
                        placeholder="Qualification" />

                    <Input
                        className='input'
                        placeholder="Grade" />
                </div>

                <div className='inputRow'>
                    <Box m={2}>
                        <Button
                            className="btn btn-primary float-right"
                            variant="contained"
                            onClick={this.props.leaveEditMode}>Cancel</Button>
                    </Box>

                    <Box m={2}>
                        <Button
                            className="btn btn-primary float-right"
                            variant="contained"
                            color="primary"
                            onClick={this.submit}>Submit</Button>
                    </Box>
                </div>
            </div>
        )
    };
}

export default QualificationItemEdit;