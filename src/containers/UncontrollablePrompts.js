import React from 'react';
import Prompts from '../components/Prompts';

const UncontrollablePrompts = props => {

    const prompts = props.prompts && props.prompts.map(prompt => prompt)

    return (
        <div>           
            <Prompts prompts={prompts} />
        </div>
    )
}

export default UncontrollablePrompts;