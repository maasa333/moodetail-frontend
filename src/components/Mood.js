import React from 'react';
import PromptsContainer from '../containers/PromptsContainer';

const Mood = props => {

    let mood = props.moods[props.match.params.id - 1]
    console.log(mood)

    return (
        <>
            {mood ? mood.feeling : null}
            {/* <PromptsContainer prompts={props.prompts} /> */}
        </>
    )
}

export default Mood;