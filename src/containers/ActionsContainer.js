import React, { Component } from 'react';
import ActionInput from '../components/ActionInput';
import Actions from '../components/Actions';

class ActionsContainer extends Component {
    
    render() {
        console.log(this.props)
        return (
            <div>
                {/* <ActionInput prompt_id={this.props.promptID} moodID={this.props.moodID} /> */}
                <ActionInput prompt={this.props.prompt} />
                <Actions actions={this.props.prompt && this.props.prompt.actions} />
            </div>
        );
    }
}

export default ActionsContainer;