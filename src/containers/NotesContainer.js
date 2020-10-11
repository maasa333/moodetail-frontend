import React from 'react';
import {Form, Button, Card, Col, Row, Accordion} from 'react-bootstrap';
import { connect } from 'react-redux';
import {addNote} from '../actions/addNote';

import NoteInput from '../components/NoteInput.js';
import Notes from '../components/Notes.js';

const NotesContainer = () => {
    return (
        <div>
            NotesContainer
            <NoteInput />
            <Notes />
        </div>
    );
}

export default NotesContainer;

