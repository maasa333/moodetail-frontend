import React from 'react';
// import {Switch, Route} from 'react-router-dom';
import PromptsContainer from '../containers/PromptsContainer';

const Mood = props => {
    
    const mood = props.moods[parseInt(props.match.params.id) - 1]

    const prompts = mood ? mood.prompts : null

    return (
        <>
            <h3>{mood ? mood.feeling : null}</h3>
            <PromptsContainer mood={mood} prompts={prompts} />
            
            {/* <Switch>
                <Route path={path} render={(routerProps) => <PromptsContainer {...routerProps} mood={mood} />} />
            </Switch> */}
        </>
    )
}

export default Mood;