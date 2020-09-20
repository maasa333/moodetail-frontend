import React from 'react';
import { Image } from 'react-bootstrap';

import PromptsContainer from '../containers/PromptsContainer';

const Mood = props => {

    const mood = props.moods && props.moods.filter(mood => mood.feeling.toLowerCase() === props.match.params.feeling.toLowerCase())[0];
    
    const prompts = mood && mood.prompts;

    return (
        <>
            <h3>{mood && mood.feeling}</h3>
            <br/>
            <Image src={mood && require(`../images/${mood.feeling.toLowerCase()}.png`)} className='mood-img' fluid rounded/>
            <PromptsContainer mood={mood} prompts={prompts} />
        </>
    )
}

export default Mood;