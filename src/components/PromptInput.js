import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addPrompt} from '../actions/addPrompt';

class PromptInput extends Component {

    state = {
        desc: ''
    }

    handleOnChange = event => {
        this.setState({
            desc: event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault()
        this.props.addPrompt(this.state)
        this.setState({
            desc: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <br/>
                    <label>Describe what prompted this mood:</label>
                    <input onChange={this.handleOnChange} name='desc' type='text' value={this.state.desc} />
                    <input type='submit' />
                </form>
            </div>
        );
    }
}

export default connect(null, {addPrompt})(PromptInput);