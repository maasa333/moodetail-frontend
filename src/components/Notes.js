import React, { Component } from 'react';
import {Form, Button, Card, Col, Row, Accordion} from 'react-bootstrap';
import { connect } from 'react-redux';
import {addNote} from '../actions/addNote';

class Notes extends Component {
    state = {
        desc: ''
    }

    render() {
        return (
            <div>
                Notes Component
                {/* <Form>
                    <Form.Control placeholder='Enter note'>
                    </Form.Control>

                    <Button type='submit'>Submit</Button>
                </Form> */}
            </div>
        );
    }
}

export default Notes;
