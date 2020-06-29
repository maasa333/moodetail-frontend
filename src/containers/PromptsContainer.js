import React from 'react';
// import {Route} from 'react-router-dom';
import PromptInput from '../components/PromptInput';
import ControllablePrompts from '../containers/ControllablePrompts';
import UncontrollablePrompts from '../containers/UncontrollablePrompts';

const PromptsContainer = props => {

    const controllablePrompts = props.prompts && props.prompts.filter(prompt => prompt.controllable === true)
    
    const uncontrollablePrompts = props.prompts && props.prompts.filter(prompt => prompt.controllable === false)
    
    return (
        <div>
            <PromptInput mood={props.mood} />
            <ControllablePrompts prompts={controllablePrompts} />
            <UncontrollablePrompts prompts={uncontrollablePrompts} />
        </div>
    )
}

export default PromptsContainer;