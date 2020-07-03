import React from 'react';
import {Container, Card, CardColumns} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import Happy from '../images/Happy.png';
import Anxious from '../images/Anxious.png';
import Angry from '../images/Angry.png';
import Humorous from '../images/Humorous.png';
import Calm from '../images/Calm.png';
import Fearful from '../images/Fearful.png';
import Hopeful from '../images/Hopeful.png';
import Sad from '../images/Sad.png';
import Grateful from '../images/Grateful.png';

const Moods = props => {

    return (
        <div>
            {/* <ul> */}
            <CardColumns className='text-center'>
                {props.moods.map(mood => 
                    <Card key={mood.id} border='primary' style={{ width: '20rem'}} >
                        <Card.Img variant='top' src={require(`../images/${mood.feeling}.png`)} />
                        <Card.Body className='text-center' >
                            <Card.Link href={`/moods/${mood.id}`} ><h5>{mood.feeling}</h5></Card.Link>    
                        </Card.Body>
                    </Card>
                )}
            </CardColumns>
            {/* </ul> */}
        </div>
    );
}

export default Moods;