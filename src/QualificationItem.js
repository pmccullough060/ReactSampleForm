import React from 'react';
import './QualificationItem.css';
import { ListItem, ListItemText } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

class QualificationItem extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            editMode : true
        }
    }

    render(){
                
        return(
            <ListItem className='qualificationItem'>
                <div className='innerListItem'>

                    <ListItemText
                        primary={this.props.name}/>
                </div>
            </ListItem>
        )
    };
}

export default QualificationItem;