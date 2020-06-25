import React from 'react';
import Prompts from '../components/Prompts';

const UncontrollablePrompts = props => {
    return (
        <div>
            <h4>Uncontrollable Prompts Container</h4>
            <Prompts mood={props.mood} />
        </div>
    )
}

export default UncontrollablePrompts;