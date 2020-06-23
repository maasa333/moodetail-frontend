import React from 'react';
// import Button from 'react-bootstrap/Button';
// import { connect } from 'react-redux';
// import {deletePrompt} from '../actions/deletePrompt';
import ButtonsContainer from '../containers/ButtonsContainer';
// import ActionsContainer from '../containers/ActionsContainer';

const Prompt = props => {
    
    // const handleDelete = (props) => {
    //     props.deletePrompt(props.id, props.moodID)
    // }

    // const renderActionsContainer = () => {
    //     if (props && (props.controllable === true)) {
    //         return <ActionsContainer prompt={props} promptID={props.id} moodID={props.moodID} />
    //     }
    // }

    return (
        <div>
            {props.prompt}
            <ButtonsContainer />
            {/* <Button onClick={() => handleDelete(props)} size='sm' variant='outline-danger' >Delete</Button> */}
            {/* <br/>
            {renderActionsContainer()} */}
        </div>
    );
}

export default Prompt;
// export default connect(null, {deletePrompt})(Prompt);