import React from 'react';
import Prompts from '../components/Prompts';

const ControllablePrompts = props => {

    const mood = props.mood && props.mood.prompts.filter(prompt => prompt.controllable === true)
    console.log(mood)
    return (
        <div>
            <h4>Controllable Prompts Container</h4>
            <Prompts mood={props.mood} />
        </div>
    )
}

export default ControllablePrompts;