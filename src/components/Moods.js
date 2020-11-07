import React from 'react';
import {Card, CardColumns} from 'react-bootstrap';

const Moods = props => {
    
    return (
        <div>
            <CardColumns className='text-center'>
                {props.moods.map(mood => 
                    <Card key={mood.id} border='light' style={{width: '20rem'}} className='shadow p-3 mb-5 rounded' >
                        <Card.Img variant='top' src={require(`../images/${mood.feeling.toLowerCase()}.png`)} />
                        <Card.Body className='text-center' >
                            <Card.Link className='stretched-link' href={`/moods/${mood.feeling}`} ><h5>{mood.feeling}</h5></Card.Link>
                        </Card.Body>
                    </Card>
                )}
            </CardColumns>
        </div>
    );
}

export default Moods;