import React from 'react';
import PromptsContainer from '../containers/PromptsContainer';

const Mood = props => {
    return (
        <div>
            {props.feeling}
            <PromptsContainer moodID={props.moodID} />
            <br/>
        </div>
    )
}

export default Mood;