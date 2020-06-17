import React from 'react';
import Mood from './Mood';

const Moods = props => {

    return (
        <div>
            {props.moods.map(mood => <Mood key={mood.id} feeling={mood.feeling} />)}
        </div>
    );
}

export default Moods;