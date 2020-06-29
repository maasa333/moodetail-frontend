import React, { Component } from 'react';
import {Accordion, Button, Card} from 'react-bootstrap';
import { connect } from 'react-redux';
import {deletePrompt} from '../actions/deletePrompt';

class ActionsContainer extends Component {

    handleDelete = (props) => {
        props.deletePrompt(this.props.prompt.id, this.props.prompt.moodID)
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <Accordion.Collapse>
                    <Card.Body>
                        <Button size='sm' variant='outline-danger' onClick={() => this.handleDelete(this.props)}>Delete</Button>{'   '}
                        {this.props.prompt.controllable === true ? <Button size='sm' variant='outline-success' >Take action!</Button> : null }
                        {this.props.prompt.controllable === false ? <Button size='sm' variant='outline-success' >What can I do?</Button> : null }
                        {/* // <Button size='sm' variant='outline-success' >Take action!</Button> */}
                    </Card.Body>
                </Accordion.Collapse>
            </div>
        );
    }
}

export default connect(null, {deletePrompt})(ActionsContainer);