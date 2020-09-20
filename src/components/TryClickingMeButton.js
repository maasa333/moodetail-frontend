import React from 'react';
import {Button} from 'react-bootstrap';

const TryClickingMeButton = (props) => {

    const handleClick = () => {
        console.log('I clicked this')
    }

    return (
        <div>
            <Button onClick={handleClick} size='sm' variant='outline-primary' >Try Clicking Me</Button>
        </div>
    );
}

export default TryClickingMeButton;
