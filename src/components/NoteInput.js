import React, { useState } from 'react';
import {Form, Button} from 'react-bootstrap';
import { connect } from 'react-redux';
// import {addNote} from '../actions/addNote';

const NoteInput = () => {
    const [input, setInput] = useState('');

    console.log(input)
    return (
        <div>
            <Form>
                <Form.Control
                    onChange={event => setInput(event.target.value)}
                    placeholder='Enter note'>
                </Form.Control>
                <Button type='submit'>Submit</Button>
            </Form>
        </div>
    );
}

export default NoteInput;
