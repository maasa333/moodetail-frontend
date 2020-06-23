import React from 'react';
import {Link} from 'react-router-dom';
import {Accordion, Button, Card} from 'react-bootstrap';
import { connect } from 'react-redux';
import {deletePrompt} from '../actions/deletePrompt';
// import ActionsContainer from '../containers/ActionsContainer';

const Prompt = props => {
    
    const handleDelete = (props) => {
        props.deletePrompt(props.id, props.moodID)
    }

    // const renderActionsContainer = () => {
    //     if (props && (props.controllable === true)) {
    //         return <ActionsContainer prompt={props} promptID={props.id} moodID={props.moodID} />
    //     }
    // }

    return (
        <div>
            <Accordion.Toggle as={Button} variant='link' >
                {props.prompt}
            </Accordion.Toggle>
            <Accordion.Collapse>
                <Card.Body>
                    <Button size='sm' variant='outline-danger' onClick={() => handleDelete(props)}>Delete</Button>
                </Card.Body>
            </Accordion.Collapse>
            {/* <br/>
            {renderActionsContainer()} */}
        </div>
    );
}

export default connect(null, {deletePrompt})(Prompt);