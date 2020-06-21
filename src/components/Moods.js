import React from 'react';
import Mood from './Mood';
import {Route, Link} from 'react-router-dom';

const Moods = props => {

    return (
        <div>
            <ul>
                {props.moods.map(mood => 
                    <li key={mood.id}>
                        <Link to={`/moods/${mood.id}`} >{mood.feeling}</Link>    
                    </li>
                )}
                {/* {props.moods.map(mood => <li key={mood.id}><Mood id={mood.id} feeling={mood.feeling} prompts={mood.prompts} /></li>)} */}
            </ul>
        </div>
    );
}

export default Moods;