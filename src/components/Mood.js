import React from 'react';
import PromptsContainer from '../containers/PromptsContainer';

const Mood = props => {
    return (
        <div>
            {props.feeling} - {props.moodID}
            <PromptsContainer />
            <br/>
        </div>
    )
}

export default Mood;