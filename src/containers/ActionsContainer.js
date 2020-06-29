import React, { Component } from 'react';
import {Accordion, Button, Card} from 'react-bootstrap';
import { connect } from 'react-redux';
import {deletePrompt} from '../actions/deletePrompt';

class ActionsContainer extends Component {

    handleDelete = (props) => {
        props.deletePrompt(this.props.prompt.id, this.props.prompt.moodID)
    }
    
    render() {
        return (
            <div>
                <Accordion.Collapse>
                    <Card.Body>
                        <Card.Text>
                            <Button size='sm' variant='outline-danger' onClick={() => this.handleDelete(this.props)}>Delete</Button>
                        </Card.Text>
                    </Card.Body>
                </Accordion.Collapse>
            </div>
        );
    }
}

export default connect(null, {deletePrompt})(ActionsContainer);