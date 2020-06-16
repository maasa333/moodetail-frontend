import React from 'react';
import Mood from './Mood';

const Moods = props => {

    // const mood = (props.moods.map(mood => <Mood feeling={mood.feeling} />))

    return (
        <div>
            {props.moods.map(mood => <Mood feeling={mood.feeling} />)}
        </div>
    );
}

export default Moods;