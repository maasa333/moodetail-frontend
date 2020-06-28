
import React from 'react';
import {Card} from 'react-bootstrap';
import Prompt from '../components/Prompt';

const Prompts = props => {

    return (
        <div>
            {/* <ul>
                {props.prompts && props.prompts.map(prompt => 
                    <li key={prompt.id}><Prompt prompt={prompt.desc} id={prompt.id} moodID={prompt.mood_id} controllable={prompt.controllable} /></li>
                )}
            </ul> */}
                
                {props.prompts && props.prompts.map(prompt => 
                    <Card key={prompt.id}>
                        <Card.Header>
                            <Prompt prompt={prompt.desc} id={prompt.id} moodID={prompt.mood_id} />
                        </Card.Header>
                    </Card>
                )}
        </div>
    );
}

export default Prompts;