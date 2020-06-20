import React from 'react';
import PromptsContainer from '../containers/PromptsContainer';

const Mood = props => {

    // let mood = props.moods.filter(mood => mood.id === props.match.param.id)[0];
    // console.log(mood)

    return (
        <>
            {props.feeling}
            <PromptsContainer prompts={props.prompts} />
            {/* {mood ? mood.feeling : null} */}
        </>
    )
}

export default Mood;