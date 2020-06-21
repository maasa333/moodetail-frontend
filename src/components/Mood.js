import React from 'react';
import {Redirect} from 'react-router-dom';
import PromptsContainer from '../containers/PromptsContainer';

const Mood = props => {

    let mood = props.moods[props.match.params.id - 1]
    console.log(mood)

    return (
        <>
            {/* {mood ? null : <Redirect to='/moods' />} */}
            {mood ? mood.feeling : null}
            {/* <PromptsContainer prompts={props.prompts} /> */}
        </>
    )
}

export default Mood;