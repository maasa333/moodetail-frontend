import React, { Component } from 'react';
import {Popover, OverlayTrigger, Accordion, Button, Card} from 'react-bootstrap';
import { connect } from 'react-redux';
import {deletePrompt} from '../actions/deletePrompt';

// import ActionInput from '../components/ActionInput';
// import Actions from '../components/Actions';

class ActionsContainer extends Component {

    // handleYesClick = () => {
    //     console.log('YES!')
    // }

    handleDelete = (props) => {
        props.deletePrompt(this.props.prompt.id, this.props.prompt.moodID)
    }
    
    render() {
        // console.log(this.props)
        return (
            <div>
                <Accordion.Collapse>
                    <Card.Body>
                        <Card.Text>
                            <Button size='sm' variant='outline-danger' onClick={() => this.handleDelete(this.props)}>Delete</Button>
                            
                            {/* Is this in your control?
                            <br/>
                            <Button onClick={this.handleYesClick} size='sm'>Yes</Button>{'  '}
                            <Button size='sm'>No</Button>{'   '} */}
                        </Card.Text>
                    </Card.Body>
                </Accordion.Collapse>

                {/* <Popover.Title>ActionsContainer</Popover.Title>
                    <Popover.Content>
                        ActionsContainer
                    </Popover.Content> */}
                
                {/* <ActionInput prompt_id={this.props.promptID} moodID={this.props.moodID} /> */}
                {/* <ActionInput prompt={this.props.prompt} /> */}
                {/* <Actions actions={this.props.prompt && this.props.prompt.actions} /> */}
            </div>
        );
    }
}

export default connect(null, {deletePrompt})(ActionsContainer);
// export default ActionsContainer;