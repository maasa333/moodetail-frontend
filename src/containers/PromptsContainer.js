import React, { Component } from 'react';
import Prompts from '../components/Prompts.js';

class PromptsContainer extends Component {

    render() {
        return (
            <div>
                <Prompts prompts={this.props.prompts} />
            </div>
        );
    }
}

export default PromptsContainer;