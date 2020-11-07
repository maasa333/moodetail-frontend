// WORKING ON NEW FEATURE

import React, { useState } from 'react';
import {Form, Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import {addNote} from '../actions/addNote';

const NoteInput = (props) => {
    const [input, setInput] = useState('');

    const handleOnSubmit = (event) => {
        event.preventDefault();
        debugger
        props.addNote(input);
    }

    return (
        <div>
            <Form onSubmit={event => handleOnSubmit(event)}>
                <Form.Control
                    onChange={event => setInput(event.target.value)}
                    placeholder='Enter note'>
                </Form.Control>
                <Button type='submit'>Submit</Button>
            </Form>
        </div>
    );
}

export default connect(null, {addNote})(NoteInput);
