import React from 'react';
import Prompt from '../components/Prompt'

const Prompts = props => {
    // console.log(props)
    return (
        <div>
            <ul>{props.prompts.map(prompt => <li key={prompt.id}><Prompt prompt={prompt.desc} moodID={prompt.moodID} /></li>)}</ul>
        </div>
    );
}

export default Prompts;
