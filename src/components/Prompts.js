import React from 'react';
import Prompt from '../components/Prompt'

const Prompts = props => {
    // debugger
    return (
        <div>
            <ul>
                {props.prompts && props.prompts.map(prompt => 
                    <li key={prompt.id}><Prompt prompt={prompt.desc} moodID={prompt.mood_id} /></li>
                )}
            </ul>
        </div>
    );
}

export default Prompts;
