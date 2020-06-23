import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import {deletePrompt} from '../actions/deletePrompt';

class ButtonsContainer extends Component {

    handleDelete = (props) => {
        this.props.deletePrompt(props.id, props.moodID)
    }

    render() {
        return (
            <div>
                <Button onClick={() => this.handleDelete(this.props)} size='sm' variant='outline-danger' >Delete</Button>
            </div>
        );
    }
}

export default connect(null, {deletePrompt})(ButtonsContainer);