import React, { Component } from 'react';
import Prompts from '../components/Prompts';
import PromptInput from '../components/PromptInput';

class PromptsContainer extends Component {
    
    // renderPrompts = () => {
    //     if (this.props.mood && this.props.mood.prompts) {
    //         return <Prompts prompts={this.props.mood.prompts} />
    //     } else {
    //         return null
    //     }
    // }

    // renderPromptInput = () => {
    //     if (this.props && this.props.mood) {
    //         return <PromptInput mood={this.props.mood} />
    //     } else {
    //         return null
    //     }
    // }

    render() {
        // debugger
        return (
            <div>
                {/* {this.props && <PromptInput mood={this.props.mood} />} */}
                <PromptInput mood={this.props.mood} />

                {/* {this.renderPrompts} */}
                <Prompts prompts={this.props.mood && this.props.mood.prompts} />
            </div>
        );
    }
}

export default PromptsContainer;