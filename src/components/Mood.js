import React from 'react';
import PromptsContainer from '../containers/PromptsContainer';

const Mood = props => {
    
    const mood = props.moods[parseInt(props.match.params.id) - 1]
    
    return (
        <>
            <h2>{mood ? mood.feeling : null}</h2>
            <PromptsContainer mood={mood} />
        </>
    )
}

export default Mood;