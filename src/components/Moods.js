import React from 'react';
import {Link} from 'react-router-dom';

const Moods = props => {

    return (
        <div>
            <ul>
                {props.moods.map(mood => 
                    <li key={mood.id}>
                        <Link to={`/moods/${mood.id}`} >{mood.feeling}</Link>    
                    </li>
                )}
            </ul>
        </div>
    );
}

export default Moods;