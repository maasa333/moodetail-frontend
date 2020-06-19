import React from 'react';
import Mood from './Mood';
// import {Route, Link} from 'react-router-dom';

const Moods = props => {

    // const renderMoods = Object.keys(props.moods).map(moodID => {
    //     return (
    //         <div key={moodID}>
    //             <Link key={moodID} to={`/moods/${moodID}`}>{props.moods[moodID].feeling}</Link>
    //             {/* <Route exact path='' /> */}
    //         </div>
    //     )
    // })

    return (
        <div>
            <ul>
                {props.moods.map(mood => <li key={mood.id}><Mood id={mood.id} feeling={mood.feeling} prompts={mood.prompts} /></li>)}
                {/* {renderMoods} */}
                {/* // <ul>
                //     {props.moods.map(mood => <li><Mood key={mood.id} feeling={mood.feeling} moodID={mood.id} /></li> )}
                // </ul> */}
            </ul>
        </div>
    );
}

export default Moods;