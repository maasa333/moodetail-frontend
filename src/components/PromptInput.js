import React, { Component } from 'react';
import {Form, Button, Card, Col, Row} from 'react-bootstrap';
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
        return (
            <div>
                <Card>
                    <Card.Body>
                        <Form onSubmit={event => this.handleOnSubmit(event)}>
                            <Form.Group as={Row}>
                                <Form.Label column sm={3}>
                                    <h6>Describe what prompted this mood:</h6>
                                </Form.Label>
                                <Col sm={9}>
                                    <Form.Control 
                                        onChange={event => this.handleOnChange(event)} 
                                        name='desc' 
                                        type='text' 
                                        value={this.state.desc}
                                        placeholder='Enter description'>
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row}>
                                <Form.Label column sm={3}>
                                    <h6>Is this within my control?</h6>
                                </Form.Label>
                                <Col sm={9}>
                                    <Form.Check 
                                        inline label='Yes' 
                                        type='radio' 
                                        name='controllable' 
                                        onChange={this.handleYes} 
                                    />
                                    <Form.Check 
                                        inline label='No' 
                                        type='radio' 
                                        name='controllable' 
                                        onChange={this.handleNo} 
                                    />  
                                </Col>
                            </Form.Group>
                            
                            <Button type='submit'>Submit</Button>
                        </Form>
                    </Card.Body>
                </Card>
                <br/>
            </div>
        );
    }
}

export default connect(null, {addPrompt})(PromptInput);