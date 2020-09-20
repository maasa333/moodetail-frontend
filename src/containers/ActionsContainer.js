import React, { Component } from 'react';
import {Accordion, Button, Card} from 'react-bootstrap';
import { connect } from 'react-redux';

import {deletePrompt} from '../actions/deletePrompt';

class ActionsContainer extends Component {

    handleDelete = (props) => {
        props.deletePrompt(props.prompt.id, props.prompt.mood_id)
    }

    render() {
        return (
            <div>
                <Accordion.Collapse>
                    <Card.Body>
                        <Button size='sm' variant='outline-danger' onClick={() => this.handleDelete(this.props)}>Delete</Button>
                        
                    </Card.Body>
                </Accordion.Collapse>
            </div>
        );
    }
}

export default connect(null, {deletePrompt})(ActionsContainer);