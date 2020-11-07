import React, { Component } from 'react';
import {Accordion, Button, Card} from 'react-bootstrap';
import { connect } from 'react-redux';

import {deletePrompt} from '../actions/deletePrompt';
import {addNote} from '../actions/addNote';

// COMMENTED OUT NEW FEATURES I'M WORKING ON

// import TryClickingMeButton from '../components/TryClickingMeButton';
// import NotesContainer from './NotesContainer.js';

class ActionsContainer extends Component {

    handleDelete = (props) => {
        props.deletePrompt(props.prompt.id, props.prompt.mood_id)
    }

    // handleNotes = (props) => {
    //     return <NotesContainer />
    //     // props.addNote(props.prompt.id, props.prompt.mood_id)
    // }

    // renderAltButtons = (props) => {
    //     if (props.prompt.controllable === true) {
    //         return <Button id='notes-button' size='sm' variant='outline-primary' onClick={() => this.handleNotes(props)} >Notes</Button>
    //     } else {
    //         return <Button size='sm' variant='outline-primary' >Try Clicking Me</Button>
    //     }
    // }

    render() {
        return (
            <div>
                <Accordion.Collapse>
                    <Card.Body>
                        <Button size='sm' variant='outline-danger' onClick={() => this.handleDelete(this.props)}>Delete</Button>
                        {/* <span>  </span>
                        {this.renderAltButtons(this.props)} */}
                    </Card.Body>
                </Accordion.Collapse>
            </div>
        );
    }
}

export default connect(null, {deletePrompt, addNote})(ActionsContainer);