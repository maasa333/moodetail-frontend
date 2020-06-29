import React from 'react';
import {CardColumns} from 'react-bootstrap';
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
            <CardColumns>
                <ControllablePrompts prompts={controllablePrompts} />
                <UncontrollablePrompts prompts={uncontrollablePrompts} />
            </CardColumns>
        </div>
    )
}

export default PromptsContainer;