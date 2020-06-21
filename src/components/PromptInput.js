import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addPrompt} from '../actions/addPrompt';

class PromptInput extends Component {

    state = {
        desc: '',
        controllable: false
    }

    handleOnChange = event => {
        this.setState({
            desc: event.target.value
        })
    }

    handleChecked = () => {        
        this.setState({
            controllable: !this.state.controllable
        })
    }

    handleOnSubmit = event => {
        event.preventDefault()
        this.props.addPrompt(this.state, this.props.mood.id)
        this.setState({
            mood: '',
            desc: ''
        })
    }

    render() {
        // console.log(this.state)
        return (
            <div>
                <form onSubmit={event => this.handleOnSubmit(event)}>
                    <label>Describe what prompted this mood:</label>
                    <input onChange={event => this.handleOnChange(event)} name='desc' type='text' value={this.state.desc} />
                    <br/>
                    <label>Controllable</label>
                    <input onChange={this.handleChecked} type='checkbox' />
                    <br/>
                    <input type='submit' />
                </form>
            </div>
        );
    }
}

export default connect(null, {addPrompt})(PromptInput);