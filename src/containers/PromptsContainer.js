import React, { Component } from 'react';
import { connect } from 'react-redux';
import PromptInput from '../components/PromptInput.js';
import Prompts from '../components/Prompts.js';

class PromptsContainer extends Component {
    render() {
        return (
            <div>
                <PromptInput />
                <Prompts />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        prompts: state.prompts
    }
}

export default connect(mapStateToProps)(PromptsContainer);