import React from 'react';
import {Card} from 'react-bootstrap';
import Prompt from './Prompt';

const UncontrollablePrompts = props => {
    
    return (
        <div> 
            <Card>
                <Card.Header as='h5'>Out of my control</Card.Header>
                <Card.Body>
                    {props.prompts && props.prompts.map(prompt => 
                        <Card.Text key={prompt.id} as='span'>
                            <Prompt prompt={prompt} />
                            <br/>
                        </Card.Text>
                    )}
                </Card.Body>
            </Card>
        </div>
    )
}

export default UncontrollablePrompts;