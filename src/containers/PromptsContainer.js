import React, { Component } from 'react';
import { connect } from 'react-redux';
import PromptInput from '../components/PromptInput';
import Prompts from '../components/Prompts.js';

class PromptsContainer extends Component {
    render() {
        // console.log(this.state)
        return (
            <div>
                <PromptInput moodID={this.props.moodID} />
                <Prompts moodID={this.props.moodID} prompts={this.props.prompts} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        prompts: state.prompts
    }
}

export default connect(mapStateToProps)(PromptsContainer);