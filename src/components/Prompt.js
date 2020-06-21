import React from 'react';
import { connect } from 'react-redux';
import {deletePrompt} from '../actions/deletePrompt';

const Prompt = props => {
    
    const handleDelete = (props) => {
        console.log(props)
        props.deletePrompt(props.id, props.moodID)
    }

    return (
        <div>
            {props.prompt}  <button onClick={() => handleDelete(props)}>Delete</button>
        </div>
    );
}

export default connect(null, {deletePrompt})(Prompt);