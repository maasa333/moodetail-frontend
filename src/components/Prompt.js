import React from 'react';
import { connect } from 'react-redux';
import {deletePrompt} from '../actions/deletePrompt';
// import ActionsContainer from '../containers/ActionsContainer';

const Prompt = props => {
    
    const handleDelete = (props) => {
        props.deletePrompt(props.id, props.moodID)
    }

    // const renderActionsContainer = () => {
    //     if (props && (props.controllable === true)) {
    //         return <ActionsContainer prompt={props} promptID={props.id} moodID={props.moodID} />
    //     }
    // }

    return (
        <div>
            {props.prompt}  <button onClick={() => handleDelete(props)}>Delete</button>
            {/* <br/>
            {renderActionsContainer()} */}
        </div>
    );
}

export default connect(null, {deletePrompt})(Prompt);