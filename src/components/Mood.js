import React from 'react';
import {Redirect} from 'react-router-dom';
// import {Switch, Route} from 'react-router-dom';

import PromptsContainer from '../containers/PromptsContainer';

const Mood = props => {
    
    const mood = props.moods[parseInt(props.match.params.id) - 1]

    const prompts = mood ? mood.prompts : null

    return (
        <>
            <br/>
            {/* {mood ? null : <Redirect to='/moods' />} */}
            <h3>{mood ? mood.feeling : null}</h3>
            <br/>
            <PromptsContainer mood={mood} prompts={prompts} />
            
            {/* <Switch>
                <Route path={path} render={(routerProps) => <PromptsContainer {...routerProps} mood={mood} />} />
            </Switch> */}
        </>
    )
}

export default Mood;