import React from 'react';
import {Card} from 'react-bootstrap';
import Prompt from '../components/Prompt';

const Prompts = props => {

    return (
        <div>
            {props.prompts && props.prompts.map(prompt => 
                <Card key={prompt.id}>
                    <Card.Header>
                        <Prompt prompt={prompt.desc} id={prompt.id} moodID={prompt.mood_id} controllable={prompt.controllable} />
                    </Card.Header>
                </Card>
            )}
        </div>
    );
}

export default Prompts;
