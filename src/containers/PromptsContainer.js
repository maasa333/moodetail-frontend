import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import PromptInput from '../components/PromptInput';
import ControllablePrompts from '../components/ControllablePrompts';
import UncontrollablePrompts from '../components/UncontrollablePrompts';

const PromptsContainer = props => {

    const controllablePrompts = props.prompts && props.prompts.filter(prompt => prompt.controllable === true)
    
    const uncontrollablePrompts = props.prompts && props.prompts.filter(prompt => prompt.controllable === false)
    
    return (
        <div>
            <PromptInput mood={props.mood} />
            <Container>
                <Row>
                    <Col><ControllablePrompts prompts={controllablePrompts} /></Col>
                    <Col><UncontrollablePrompts prompts={uncontrollablePrompts} /></Col>
                </Row>
            </Container>
        </div>
    )
}

export default PromptsContainer;