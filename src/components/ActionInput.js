import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addAction} from '../actions/addAction';

class ActionInput extends Component {

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
        this.props.addAction(this.state, this.props)
        // this.setState({
        //     mood: '',
        //     desc: ''
        // })
    }

    render() {
        // console.log(this.state, this.props)
        return (
            <div>
                <form onSubmit={event => this.handleOnSubmit(event)}>
                    <label>Actions I can take:</label>
                    <input onChange={event => this.handleOnChange(event)} name='desc' type='text' value={this.state.desc} />
                    <br/>
                    <input type='submit' />
                </form>
            </div>
        );
    }
}

export default connect(null, {addAction})(ActionInput);
// export default connect(null)(ActionInput);