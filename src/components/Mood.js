import React from 'react';
import PromptsContainer from '../containers/PromptsContainer';

const Mood = props => {

    // let mood = props.feeling[props.match.params.id -1]

    // console.log(props)

    return (
        <>
            {props.feeling}
            <PromptsContainer prompts={props.prompts} />
            {/* {mood ? mood.feeling : null} */}
        </>
    )
}

export default Mood;