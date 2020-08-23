import React from 'react';
import {Container} from 'react-bootstrap';
import '../css/About.css';

const About = () => {
    return (
        <div>
            <br/>
                <Container className='about'>
                    <p style={{textAlign: 'center'}}>How are you feeling?<br/>
                    Go to "All Moods" to select your current mood and give a short description of what prompted it.<br/>
                    Think about whether this is something within or out of your control.<br/>
                    Keep using this app to help you practice mindfulness.</p> 
                </Container>
            
        </div>
    );
}

export default About;