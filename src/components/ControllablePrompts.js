import React from 'react';
import {Card} from 'react-bootstrap';
import Prompt from './Prompt';

const ControllablePrompts = props => {

    return (
        <div>
            <Card className='prompt-box'>
                <Card.Header className='prompt-box-header' as='h5'>Within my control</Card.Header>
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

export default ControllablePrompts;