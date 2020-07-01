import React from 'react';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Moods = props => {

    return (
        <div>
            {/* <ul> */}
                {props.moods.map(mood => 
                    // <Card border='primary'>
                        <Button key={mood.id} href={`/moods/${mood.id}`} size='lg' block >{mood.feeling}    
                            {/* <Link to={`/moods/${mood.id}`} >{mood.feeling}</Link>     */}
                        </Button>
                    // </Card>
                )}
            {/* </ul> */}
        </div>
    );
}

export default Moods;