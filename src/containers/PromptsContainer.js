import React, { Component } from 'react';
import Prompts from '../components/Prompts.js';

class PromptsContainer extends Component {

    render() {
        // console.log(this.props.mood)

        // debugger
        return (
            <div>
                PromptsContainer
                <Prompts prompts={this.props.mood && this.props.mood.prompts} />
            </div>
        );
    }
}

export default PromptsContainer;