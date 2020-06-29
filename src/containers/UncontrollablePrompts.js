import React from 'react';
import {Card} from 'react-bootstrap';
import Prompt from '../components/Prompt';

const UncontrollablePrompts = props => {

    return (
        <div> 
            <Card>
                <Card.Body>
                    <Card.Title>Out of my control</Card.Title>
                    {props.prompts && props.prompts.map(prompt => 
                        <Card.Text key={prompt.id}>
                            <Prompt prompt={prompt.desc} id={prompt.id} moodID={prompt.mood_id} />
                        </Card.Text>
                    )}
                </Card.Body>
            </Card>
        </div>
    )
}

export default UncontrollablePrompts;