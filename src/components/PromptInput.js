import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import {addPrompt} from '../actions/addPrompt';

class PromptInput extends Component {
    
    state = {
        desc: '',
        controllable: ''
    }

    handleOnChange = event => {
        this.setState({
            desc: event.target.value
        })
    }

    handleYes = () => {        
        this.setState({
            controllable: true
        })
    }
   
    handleNo = () => {        
        this.setState({
            controllable: false
        })
    }

    handleOnSubmit = event => {
        event.preventDefault()
        if (this.state.desc === "") {
            alert('Please describe what prompted this mood')
        } else if (this.state.controllable === '') {
            alert ('Is this within your control?  Select "Yes" or "No"')
        } else {
            this.props.addPrompt(this.state, this.props.mood.id)
        }
        this.setState({
            desc: ''
        })
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <Form onSubmit={event => this.handleOnSubmit(event)}>
                    <Form.Label as='h5'>Describe what prompted this mood:</Form.Label>
                    <Form.Control onChange={event => this.handleOnChange(event)} name='desc' type='text' value={this.state.desc}></Form.Control>
                    <br/>
                    <Form.Label as='h5'>Is this within my control?</Form.Label>
                    <Form.Check label='Yes' type='radio' name='controllable' onChange={this.handleYes} />
                    <Form.Check label='No' type='radio' name='controllable' onChange={this.handleNo} />
                    <br/>
                    <Button type='submit'>Submit</Button>
                </Form>
                <br/>
            </div>
        );
    }
}

export default connect(null, {addPrompt})(PromptInput);