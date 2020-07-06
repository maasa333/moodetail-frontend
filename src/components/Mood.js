import React from 'react';

import PromptsContainer from '../containers/PromptsContainer';

const Mood = props => {
    
    const mood = props.moods.filter(mood => mood.feeling.toLowerCase() === props.match.params.feeling.toLowerCase())[0];
    
    const prompts = mood && mood.prompts
        
    return (
        <>
            <h3>{mood && mood.feeling}</h3>
            <br/>
            <PromptsContainer mood={mood} prompts={prompts} />
        </>
    )
}

export default Mood;


// Trying to resolve invalid url path, but the initial render of causing redirect even for valid moods:

// const feelings = props.moods.map(mood => mood.feeling.toLowerCase())

// const redirectIfNecessary = () => {
//     if (mood && feelings.includes(props.location.pathname.split('/').pop())) {
//         return (
//             <h3>{mood.feeling}</h3>
//             // <br/>,
//             // <PromptsContainer mood={mood} prompts={prompts} />
//             )
//         } else {
//             return <Redirect to='/moods'/>
//         }
//     }