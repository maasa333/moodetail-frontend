import React from 'react';
import {Container} from 'react-bootstrap';

const About = () => {
    return (
        <div>
            <br/>
                <Container>
                    <h2 style={{textAlign: 'center'}}>MOODetail</h2>
                    <br/>
                    <h4 style={{textAlign: 'center'}}>How are you feeling?<br/>
                    Go to "All Moods" to select your current mood and give a short description of what prompted it.<br/>
                    Think about whether this is something within or out of your control.<br/>
                    Keep using this app to help you practice mindfulness.</h4> 
                </Container>
            
        </div>
    );
}

export default About;