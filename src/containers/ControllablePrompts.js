import React from 'react';
import {Card} from 'react-bootstrap';
import Prompt from '../components/Prompt';

const ControllablePrompts = props => {
    console.log(props)

    return (
        <div>
            <Card>
                <Card.Header as='h5'>Within my control</Card.Header>
                <Card.Body>
                    {props.prompts && props.prompts.map(prompt => 
                        <Card.Text key={prompt.id} as='span'>
                            <Prompt prompt={prompt} />
                            {/* <Prompt prompt={prompt.desc} id={prompt.id} moodID={prompt.mood_id} /> */}
                            <br/>
                        </Card.Text>
                    )}
                </Card.Body>
            </Card>
        </div>
    )
}

export default ControllablePrompts;