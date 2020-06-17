import React, { Component } from 'react';
import { connect } from 'react-redux';
import Prompts from '../components/Prompts.js';

class PromptsContainer extends Component {
    render() {
        return (
            <div>
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