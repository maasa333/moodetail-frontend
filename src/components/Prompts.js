import React from 'react';
import Prompt from '../components/Prompt'

const Prompts = props => {

    return (
        <div>
            <ul>
                {props.prompts && props.prompts.map(prompt => 
                    <li key={prompt.id}><Prompt prompt={prompt.desc} id={prompt.id} moodID={prompt.mood_id} controllable={prompt.controllable} /></li>
                )}
            </ul>
        </div>
    );
}

export default Prompts;
