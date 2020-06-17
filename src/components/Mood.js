import React from 'react';
import PromptsContainer from '../containers/PromptsContainer';

const Mood = props => {
    return (
        <div>
            {props.feeling}
            <PromptsContainer />
        </div>
    )
}

export default Mood;