import React, { Component } from 'react';
// import { connect } from 'react-redux';
import Prompts from '../components/Prompts.js';
// import PromptInput from '../components/PromptInput';

class PromptsContainer extends Component {

    // componentDidMount() {
    //     this.props.fetchPrompts();
    // }

    render() {
        // console.log(this.props)
        return (
            <div>
                {/* <PromptInput moodID={this.props.moodID} /> */}
                <Prompts prompts={this.props.prompts} />
            </div>
        );
    }
}

// const mapStateToProps = state => {
//     return {
//         prompts: state.prompts
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         addPrompt: prompt => dispatch({ type: 'ADD_PROMPT', prompt })
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(PromptsContainer);
export default PromptsContainer;