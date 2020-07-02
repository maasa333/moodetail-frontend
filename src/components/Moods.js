import React from 'react';
import {Container, Card, CardColumns} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import happy from '../images/happy.png';

const Moods = props => {

    return (
        <div>
            {/* <ul> */}
            <CardColumns className='text-center'>
                {props.moods.map(mood => 
                    <Card key={mood.id} border='primary' style={{ width: '20rem'}} >
                        <Card.Img variant='top' src={happy} alt='happy' />
                        <Card.Body className='text-center' >
                            <Card.Link href={`/moods/${mood.id}`} ><h5>{mood.feeling}</h5></Card.Link>    
                            {/* <Link to={`/moods/${mood.id}`} >{mood.feeling}</Link>     */}
                        </Card.Body>
                    </Card>
                )}
            </CardColumns>
            {/* </ul> */}
        </div>
    );
}

export default Moods;