import React from 'react';
import PromptsContainer from '../containers/PromptsContainer';

const Mood = props => {

    return (
        <>
            {props.feeling}
            <PromptsContainer prompts={props.prompts} />
            {/* {mood ? mood.feeling : null} */}
        </>
    )
}

export default Mood;