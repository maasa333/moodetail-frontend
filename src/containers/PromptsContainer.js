import React, { Component } from 'react';
import Prompts from '../components/Prompts.js';

class PromptsContainer extends Component {
    
    renderPrompts = () => {
        if (this.props.mood && this.props.mood.prompts) {
            return <Prompts prompts={this.props.mood.prompts} />
        } else {
            return null
        }
    }

    render() {
        // console.log(this.props.mood)
        return (
            <div>
                PromptsContainer
                {this.renderPrompts}
                {/* <Prompts prompts={this.props.mood && this.props.mood.prompts} /> */}
            </div>
        );
    }
}

export default PromptsContainer;