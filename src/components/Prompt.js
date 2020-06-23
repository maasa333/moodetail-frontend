import React from 'react';
import {Link} from 'react-router-dom';
import {Accordion, Button, Card, Alert} from 'react-bootstrap';
import { connect } from 'react-redux';
import {deletePrompt} from '../actions/deletePrompt';
import ActionsContainer from '../containers/ActionsContainer';
// import { render } from '@testing-library/react';

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
            <Accordion defaultActiveKey>
                <Accordion.Toggle as={Button} variant='outline-primary' >
                    {props.prompt}
                </Accordion.Toggle>
                {/* <Button size='sm' variant='outline-danger' onClick={() => handleDelete(props)}>Delete</Button> */}
                <ActionsContainer prompt={props} />
                {/* <Accordion.Collapse>
                    <Card.Body>
                        <Card.Text>
                            Is this in your control?
                            <br/>
                            <Button size='sm'>Yes</Button>{'  '}
                            <Button size='sm'>No</Button>
                        </Card.Text>
                        <br/>
                        <Button size='sm' variant='outline-danger' onClick={() => handleDelete(props)}>Delete</Button>
                    </Card.Body>
                </Accordion.Collapse> */}
            </Accordion>
            {/* <br/>
            {renderActionsContainer()} */}
        </div>
    );
}

export default connect(null, {deletePrompt})(Prompt);