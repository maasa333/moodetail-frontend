import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Prompts from '../components/Prompts';
import PromptInput from '../components/PromptInput';
import ControllablePrompts from '../containers/ControllablePrompts';
import UncontrollablePrompts from '../containers/UncontrollablePrompts';

const PromptsContainer = props => {

    const controllablePrompts = props.prompts && props.prompts.filter(prompt => prompt.controllable === true)
    
    const uncontrollablePrompts = props.prompts && props.prompts.filter(prompt => prompt.controllable === false)
    
    return (
        <div>
            <PromptInput mood={props.mood} />
            <ControllablePrompts prompts={controllablePrompts} />
            <UncontrollablePrompts prompts={uncontrollablePrompts} />
        </div>
    )
}

export default PromptsContainer;

// class PromptsContainer extends Component {

//     render() {
//         console.log(this.props)
//         return (
//             <div>
//                 <PromptInput mood={this.props.mood} />
                
//                 <ControllablePrompts />
//                 <UncontrollablePrompts />

//                 <Prompts prompts={this.props.mood && this.props.mood.prompts} />
                
//                 <Route path={this.path} render={(routerProps) => <Prompts {...routerProps} mood={this.props.mood} />} />
//             </div>
//         );
//     }
// }

// export default PromptsContainer;