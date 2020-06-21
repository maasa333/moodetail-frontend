import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addPrompt} from '../actions/addPrompt';

class PromptInput extends Component {

    state = {
        mood_id: '',
        mood: '',
        desc: ''
    }

    renderMoodOptions = () => this.props.moods.map(mood => <option key={mood.id} value={mood.feeling}>{mood.feeling}</option>)

    handleOnChange = event => {
        this.setState({
            desc: event.target.value
        })
    }

    handleOnSelect = event => {
        this.setState({
            mood_id: event.target.options.selectedIndex,
            mood: event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault()
        this.props.addPrompt(this.state)
        this.setState({
            mood: '',
            desc: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={event => this.handleOnSubmit(event)}>
                    Select a mood:
                    <select defaultValue={'DEFAULT'} onChange={event => this.handleOnSelect(event)} value={this.state.value}>
                        <option value='DEFAULT' disabled>Select a mood</option>
                        {this.renderMoodOptions()}
                    </select>
                    <br/>
                    <label>Describe what prompted this mood:</label>
                    <input onChange={event => this.handleOnChange(event)} name='desc' type='text' value={this.state.desc} />
                    <br/>
                    <input type='submit' />
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        moods: state.moods
        // prompts: state.prompts
    }
}

export default connect(mapStateToProps, {addPrompt})(PromptInput);