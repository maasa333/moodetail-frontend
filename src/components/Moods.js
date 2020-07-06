import React from 'react';
import {Card, CardColumns} from 'react-bootstrap';

const Moods = props => {

    return (
        <div>
            <CardColumns className='text-center'>
                {props.moods.map(mood => 
                    <Card key={mood.id} border='primary' style={{width: '20rem'}} >
                        <Card.Img variant='top' src={require(`../images/${mood.feeling}.png`)} />
                        <Card.Body className='text-center' >
                            <Card.Link href={`/moods/${mood.feeling.toLowerCase()}`} ><h5>{mood.feeling}</h5></Card.Link>    
                        </Card.Body>
                    </Card>
                )}
            </CardColumns>
        </div>
    );
}

export default Moods;