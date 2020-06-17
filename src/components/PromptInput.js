import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addPrompt} from '../actions/addPrompt';

class PromptInput extends Component {

    state = {
        desc: ''
    }

    handleOnChange = event => {
        this.setState({
            // mood_id: ,
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
                    <label>Select a mood:</label>
                    <select value={this.state.mood_id}>
                        {/* <option>Select a Mood</option>
                        <option value='Happy'>Happy</option>
                        <option value='Angry'>Angry</option>
                        <option value='Humorous'>Humorous</option>
                        <option value='Anxious'>Anxious</option>
                        <option value='Calm'>Calm</option>
                        <option value='Fearful'>Fearful</option>
                        <option value='Hopeful'>Hopeful</option>
                        <option value='Sad'>Sad</option> */}
                    </select>
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