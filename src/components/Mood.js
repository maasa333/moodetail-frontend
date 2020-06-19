import React from 'react';
import PromptsContainer from '../containers/PromptsContainer';

const Mood = props => {

    // let mood = props.feeling[props.match.params.id -1]

    // console.log(props)

    return (
        <div>
            {props.feeling}
            {/* <PromptsContainer moodID={props.moodID} prompts={props.prompts} /> */}
            <PromptsContainer moodID={props.id} prompts={props.prompts} />
            {/* {mood ? mood.feeling : null} */}
        </div>
    )
}

export default Mood;