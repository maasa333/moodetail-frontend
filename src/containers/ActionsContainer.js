import React, { Component } from 'react';
import {Accordion, Button, Card} from 'react-bootstrap';
import { connect } from 'react-redux';

import {editPrompt} from '../actions/editPrompt';
import {deletePrompt} from '../actions/deletePrompt';

class ActionsContainer extends Component {

    handleEdit = (props) => {
        console.log('clicked Edit')
    }

    handleDelete = (props) => {
        props.deletePrompt(this.props.prompt.id, this.props.prompt.mood_id)
    }

    render() {
        // console.log(this.props)
        return (
            <div>
                <Accordion.Collapse>
                    <Card.Body>
                        <Button size='sm' variant='outline-warning' onClick={() => this.handleEdit(this.props)}>Edit</Button>
                        {'  '}
                        <Button size='sm' variant='outline-danger' onClick={() => this.handleDelete(this.props)}>Delete</Button>
                    </Card.Body>
                </Accordion.Collapse>
            </div>
        );
    }
}

export default connect(null, {editPrompt, deletePrompt})(ActionsContainer);


// handleActionButton = () => {
    //     console.log('Take action!')
    // }
    
// handleWhatCanIDoButton = () => {
    //     console.log('Display some message about letting go')
    // }

// {this.props.prompt.controllable === true ? 
//     <Button size='sm' variant='outline-success' onClick={() => this.handleActionButton()} >Take action!</Button>
//     <OverlayTrigger trigger='click' placement='right' overlay={ActionNotes}>
//         <Button size='sm' variant='outline-success' >Take action!</Button> 
//     </OverlayTrigger>
// : null }
// {this.props.prompt.controllable === true ? <Button size='sm' variant='outline-success' onClick={() => this.handleActionButton()} >Takaction!</Button> : null }

// {this.props.prompt.controllable === false ? <Button size='sm' variant='outline-warning' onClick={() => this.handleWhatCanIDoButton()} >What can I do?</Button> : null }
                        
// {'   '}