import React from 'react';
import Prompts from '../components/Prompts';

const ControllablePrompts = props => {
    
    // const prompts = props.prompts ? props.prompts.map(prompt => prompt) : null
    const prompts = props.prompts && props.prompts.map(prompts => prompts)

    return (
        <div>
            <Prompts prompts={prompts} />
        </div>
    )
}

export default ControllablePrompts;