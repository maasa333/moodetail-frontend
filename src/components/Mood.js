import React from 'react';

import PromptsContainer from '../containers/PromptsContainer';

const Mood = props => {
    
    // const mood = props.moods && props.moods[parseInt(props.match.params.id) - 1]
    const mood = props.moods.filter(mood => mood.feeling.toLowerCase() == props.match.params.feeling.toLowerCase())[0];

    const prompts = mood ? mood.prompts : null

    return (
        <>
            <br/>
            <h3>{mood ? mood.feeling : null}</h3>
            <br/>
            <PromptsContainer mood={mood} prompts={prompts} />
        </>
    )
}

export default Mood;