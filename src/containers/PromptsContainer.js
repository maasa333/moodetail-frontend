import React, { Component } from 'react';
import {Route} from 'react-router-dom';
// import Prompts from '../components/Prompts';
import PromptInput from '../components/PromptInput';
import ControllablePrompts from '../containers/ControllablePrompts';
import UncontrollablePrompts from '../containers/UncontrollablePrompts';

class PromptsContainer extends Component {
    
    // path = (this.props.match.url)

    render() {
        // console.log(this.props)
        return (
            <div>
                {/* <Route path={this.path} render={(routerProps) => <Prompts {...routerProps} mood={this.props.mood} />} /> */}
                <PromptInput mood={this.props.mood} />
                <ControllablePrompts mood={this.props.mood} />
                <UncontrollablePrompts mood={this.props.mood} />
                {/* <Prompts prompts={this.props.mood && this.props.mood.prompts} /> */}
            </div>
        );
    }
}

export default PromptsContainer;