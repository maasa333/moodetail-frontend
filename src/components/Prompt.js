import React from 'react';
import { connect } from 'react-redux';
import {deletePrompt} from '../actions/deletePrompt';

const Prompt = props => {
    
    const handleDelete = () => {
        console.log(props)
        props.deletePrompt(props.id, props.moodID)
    }

    return (
        <div>
            {props.prompt}  <button onClick={handleDelete}>Delete</button>
        </div>
    );
}

export default connect(null, {deletePrompt})(Prompt);