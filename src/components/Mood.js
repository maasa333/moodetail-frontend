import React from 'react';
import {Route} from 'react-router-dom';
import PromptsContainer from '../containers/PromptsContainer';

const Mood = props => {
// debugger
    const mood = props.moods[parseInt(props.match.params.id) - 1]
    
    console.log(mood)
    return (
        <>
            {/* {mood ? null : <Redirect to='/moods' />} */}
            <h2>{mood ? mood.feeling : null}</h2>
            <PromptsContainer mood={mood} />

            {/* <PromptsContainer prompts={props.prompts} /> */}
        </>
    )
}

export default Mood;