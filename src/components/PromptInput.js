import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addPrompt} from '../actions/addPrompt';

class PromptInput extends Component {

    state = {
        mood_id: '',
        mood: '',
        desc: ''
    }

    renderMoodOptions = () => this.props.moods.map(mood => <option key={mood.id}>{mood.feeling}</option>)

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
            desc: ''
        })
    }

    render() {
        // console.log(this.state)
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    Select a mood:
                    <select onChange={this.handleOnSelect}>
                        <option>Select a Mood</option>
                        {this.renderMoodOptions()}
                    </select>
                    <br/>
                    <label>Describe what prompted this mood:</label>
                    <input onChange={this.handleOnChange} name='desc' type='text' value={this.state.desc} />
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
    }
}

export default connect(mapStateToProps, {addPrompt})(PromptInput);