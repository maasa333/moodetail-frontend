import React, { Component } from 'react';
import Prompts from '../components/Prompts';
import PromptInput from '../components/PromptInput';

class PromptsContainer extends Component {
    
    render() {
        return (
            <div>
                <PromptInput mood={this.props.mood} />
                <Prompts prompts={this.props.mood && this.props.mood.prompts} />
            </div>
        );
    }
}

export default PromptsContainer;